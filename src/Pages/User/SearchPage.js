import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../../Componentes/Header/Header';
import Search from '../../Componentes/Search';
import CardMovie from '../../Componentes/Cards/CardMovie';
import Footer from '../../Componentes/Footer/Footer';

export default function SearchPage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <Search />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,  
    paddingBottom: 60, 
  },
});
