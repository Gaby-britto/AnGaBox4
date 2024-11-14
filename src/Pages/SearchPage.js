import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '../Componentes/Header'
import Search from '../Componentes/Search'
import CardMovie from '../Componentes/CardMovie'
import Footer from '../Componentes/Footer'

export default function SearchPage() {
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Search />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        </ScrollView>
        <Footer/> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})