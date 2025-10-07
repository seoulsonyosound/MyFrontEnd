import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from '../styles';

export default function Userlistpage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/Registration/api/users/")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Registered Users</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.userCard}>
                        <Text style={styles.detailText}>
                            <Text style={styles.label}>Firstname:</Text> {item.first_name}
                        </Text>
                        <Text style={styles.detailText}>
                            <Text style={styles.label}>Lastname:</Text> {item.last_name}
                        </Text>
                        <Text style={styles.emailText}>
                            <Text style={styles.label}>Email:</Text> {item.email}
                        </Text>
                    </View>
                )}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}