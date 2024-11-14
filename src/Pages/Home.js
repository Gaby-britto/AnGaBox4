import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../Componentes/Header";
import Banner from "../Componentes/Banner";
import CardMovie from "../Componentes/CardMovie";
import Texts from "../Componentes/Text";
import CardVideo from "../Componentes/CardVideo";
import Footer from "../Componentes/Footer";

export default function Home() {
  return (
    <View>
      <ScrollView>
        <Header />
        <Banner />
        <Texts />

        <ScrollView
          horizontal
          style={styles.cardMovieContainer}
          showsHorizontalScrollIndicator={false}
        >
          {[...Array(4)].map((_, index) => (
            <CardMovie key={index} />
          ))}
        </ScrollView>

        <Texts />

        {/* Card Videos */}
        {[...Array(3)].map((_, index) => (
          <CardVideo key={index} />
        ))}



      </ScrollView>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cardMovieContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    paddingVertical: 5,
  }
});
