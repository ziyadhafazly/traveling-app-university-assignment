import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { router } from "expo-router";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{
          uri: "https://img.freepik.com/free-psd/3d-icon-weather-conditions-with-rain-sun_23-2150108737.jpg?semt=ais_hybrid",
        }}
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Login</Text>

      {/* Username and Password Fields */}
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      {/* Buttons */}
      <Button title="Login" onPress={() => router.push("./HomeScreen")} />
      <Button
        title="Go to Signup"
        onPress={() => router.push("./SignupScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { width: 100, height: 100, marginBottom: 20 },  
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { height: 40, width: '100%', borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }
});

export default LoginScreen;
