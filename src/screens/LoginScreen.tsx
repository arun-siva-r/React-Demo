// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordWarning, setPasswordWarning] = useState('');

  const handleLogin = () => {

    if (password.length < 8) {
         setPasswordWarning('Password must be at least 8 characters long.');
         return;
    }

    setPasswordWarning('');

    navigation.replace('Home');
  };


  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/tcs_logo.png')}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>TCS Locator</Text>
      <TextInput
        style={styles.input}
        placeholder="UserName"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {passwordWarning ? ( <Text style={styles.warningText}>{passwordWarning}</Text> ) : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff', 
  },
  logo: {
    width: 300, 
    height: 100, 
    marginBottom: 20, 
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000', 
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  warningText: { 
    color: 'red', 
    marginBottom: 16, 
   },
});

export default LoginScreen;
