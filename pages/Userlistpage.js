import { View, Text, FlatList, StyleSheet, Button, Alert } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from '../styles';

export default function Userlistpage({navigation}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://peitel-backend-alejos.onrender.com/Registration/api/users/")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);

    const handleEdit = (user) => {
        navigation.navigate('EditUser', {user});
    }

    const handleDelete = (id) => {
    //     Alert.alert(
    //         "Confirm Delete",
    //         "Are you sure you want to delete?",
    //         (
    //             {text: "Cancel", style: "cancel"},
    //             {
    //                 text: "Delete", style: "destructive", onPress: () => {
    //                     axios.delete(`http://127.0.0.1:8000/Registration/api/users/${id}/`)
    //                     .then(() => {
    //                         Alert.alert("Success", "User deleted successfully");
    //                     })
    //                     .catch((err) => {
    //                         console.error(err)
    //                         Alert.alert("Error", "Failed to delete user");
    //                     });

    //                 },
    //             }   
    //         )

    //     );
    axios.delete(`https://peitel-backend-alejos.onrender.com/Registration/api/users/${id}/`)
    };

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

                        <View>
                        <Button title="Edit"
                        onPress={() => handleEdit(item)}
                        color='#008000'
                        />
                        <Button title="Delete"
                        onPress={() => handleDelete(item.id)}
                        color='#880808'
                        />
                        </View>
                    </View>
                )}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}