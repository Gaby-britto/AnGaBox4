import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Alert, TextInput, ActivityIndicator } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import MyButton from '../Componentes/Button';
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    // const url = "http://10.92.198.32:8080/api/login";

    // try {
    //   console.log({
    //     email,
    //     password,
    //   });

    //   const response = await axios.post(url, {
    //     email: email,
    //     password: password,
    //   });
    //   Alert.alert("Sucesso", "Usuário registrado com sucesso!");
    navigation.navigate("Search");
    //   console.log("Resposta do servidor:", response.data);
    // } catch (error) {
    //   console.log("Erro na requisição:", error.message);
    //   if (error.response) {
    //     console.log("Erro detalhes:", error.response.data);
    //     Alert.alert(
    //       "Erro",
    //       "Falha ao registrar. Verifique os dados e tente novamente."
    //     );
    //     console.log(email);
    //     console.log(password.valueOf);
    //   } else {
    //     Alert.alert("Erro", "Não foi possível conectar ao servidor.");
    //   }
    // }
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../Assets/Images/logoImage.png')}
      />
      <Text style={styles.logo}>SIGN IN</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Password"
        value={password}
        onChangeText={setPassword}
      />
      <MyButton
        title='Login'
        onPress={handleSubmit}
      />
      <View style={styles.containerText}>
        <Text style={styles.question}>Don't have an account?</Text>
        <Text style={styles.login}>Sign up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  image: {
    marginTop: 161,
    width: 300,
    height: 300,
  },
  logo: {
    marginTop: 15,
    fontSize: 30,
    marginBottom: 35,
    color: 'black',
    fontFamily: 'Montserrat_400Regular',
  },
  question: {
    color: 'gray',
    marginTop: 40,
    fontFamily: 'Montserrat_400Regular',
  },
  login: {
    marginTop: 40,
    marginLeft: 5,
    color: "#9400D3",
    fontFamily: 'Montserrat_400Regular',
  },
  containerText: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  input: {
    marginTop: 27,
    height: 50,
    width: 330,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
    fontFamily: 'Montserrat_400Regular',
  }
});
