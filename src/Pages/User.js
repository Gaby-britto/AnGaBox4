import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Footer from '../Componentes/Footer';

export default function User() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.containerText}>
          <Text style={styles.hello}>Hello,</Text>
          <Text style={styles.username}> Ana Gaby</Text>
        </View>

        <Image
          style={styles.image}
          source={require('../Assets/Images/camera.jpg')}
        />

        <View style={styles.containerInfo}>
          <Text style={styles.info}>Your Information</Text>
        </View>

        <View style={styles.field}>
          <Ionicons name="person-outline" size={30} color="#9400D3" />
          <TextInput
            style={styles.input}
            placeholder="Gaby Bea"
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.field}>
          <Ionicons name="mail-outline" size={30} color="#9400D3" />
          <TextInput
            style={styles.input}
            placeholder="gaby@gmail.com"
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.field}>
          <Ionicons name="key-outline" size={30} color="#9400D3" />
          <TextInput
            style={styles.input}
            placeholder="************"
            secureTextEntry
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    alignItems: 'center',
    paddingTop: 40,
  },
  hello: {
    color: 'gray',
    fontSize: 40,
    fontFamily: 'Montserrat_400Regular',
  },
  username: {
    fontSize: 40,
    color: "#9400D3",
    fontFamily: 'Montserrat_400Regular',
  },
  image: {
    marginTop: 100,
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  info: {
    color: '#9400D3',
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'left',
    borderBottomWidth: 1,
    borderBottomColor: '#9400D3',
    marginBottom: 20,
    marginTop: 150
  },
  containerText: {
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 20,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 25,
    paddingBottom: 5,
  },
  input: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    color: "#333",
  },
  editIcon: {
    marginLeft: 10,
  },
  containerInfo: {
    marginTop: 20,
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
});
