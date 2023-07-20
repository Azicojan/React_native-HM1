/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Card, Text, Surface } from 'react-native-paper';
import logoImage from './assets/detailed-travel-logo.avif'

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    const formData = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };
    setSubmittedData(formData);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhoneNumber('');
    setEmail('');
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        
        <Text style={styles.siteName}>Expand your dream</Text>
        <Image source={logoImage} style={styles.logo}/>
        
        <TextInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          label="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
          style={styles.input}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          style={styles.input}
        />

        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Submit
        </Button>

        {submittedData && (
          <Surface style={styles.submittedData}>
            <Text style={styles.submittedText}>Submitted Data:</Text>
            <Text>Name: {submittedData.name}</Text>
            <Text>Phone Number: {submittedData.phoneNumber}</Text>
            <Text>Email: {submittedData.email}</Text>
          </Surface>
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  card: {
    padding: 16,
  },
  siteName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign:'center'
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
  submittedData: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  submittedText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 16
  }
});

export default RegistrationPage;
