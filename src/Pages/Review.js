import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import TextField from '../Componentes/TextField';
import MyButton from '../Componentes/Button';

export default function Review() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://i.pinimg.com/564x/fb/55/33/fb553309af3b1e60ca4d8a85972d4c11.jpg' }}
      />
      <Text style={styles.title}>The Batman</Text>
      <Text style={styles.question}>
        After two years prowling the streets as Batman, Bruce Wayne finds himself in the darkest depths of Gotham City. With few reliable allies, the lone vigilante establishes himself as the personification of revenge for the population.
      </Text>
      <TextField placeholder="Write your review..." />
      <TextField placeholder="Rate the movie (1-5)" />
      <MyButton title="Submit Review" onPress={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  question: {
    color: 'gray',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  containerText: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
