import {View, Text, TextInput, Button} from 'react-native';
import styles from '../styles';
import {useState} from 'react';
import axios from 'axios';



export default function Edituserpage({route, navigation}) {
    const {user} = route.params;

    const [firstname, setFirstName] = useState(user.first_name);
    const [lastname, setLastName] = useState(user.last_name);
    const [user_email, setEmail] = useState(user.email);
    const [user_password, setPassword] = useState(user.password);
    const [user_gender, setGender] = useState(user.gender);

    const handleUpdate = () => {
        if (!firstname || !lastname || !user_email || !user_gender || !user_password){
            window.alert("Error", "Please fill up all required fields");
            return;
        }

        axios
            .put(`http://127.0.0.1:8000/Registration/api/users/${user.id}/`, {
            first_name: firstname,
            last_name: lastname,
            email: user_email,
            password: user_password,
            gender: user_gender,
            })
            .then(() => {
                window.alert("Success", "User updated successfully");
                navigation.goBack();
            })
            .catch((error) => {
                console.error(error);
                window.alert("Error", "Failed to update user");
            });

    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Edit User</Text>

            <TextInput
                style={styles.input}
                value={firstname}
                onChangeText={setFirstName}
                placeholder="First Name"
            />
            <TextInput
                style={styles.input}
                value={lastname}
                onChangeText={setLastName}
                placeholder="Last Name"
            />
            <TextInput
                style={styles.input}
                value={user_email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                value={user_password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                value={user_gender}
                onChangeText={setGender}
                placeholder="Gender"
            />

            <View>
                <Button
                    style={styles.button}
                    title="Update Record"
                    onPress={handleUpdate}
                    color="#A020F0"
                />
            </View>
        </View>
    );
}