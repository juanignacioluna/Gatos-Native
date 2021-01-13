import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen({ navigation }) {

  const [urlGato, setUrlGato] = useState("https://cdn2.thecatapi.com/images/7cl.jpg");

  useEffect(() => {

      fetch("https://api.thecatapi.com/v1/images/search?mime_types=gif")
      .then(response => response.json())
      .then((responseJson)=> {

        setUrlGato(responseJson[0].url)

        console.log(urlGato)

      })
  
  }, []);


  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.getStartedContainer}>

          <Text style={styles.titulo}>gatitos que dan felicidad 🐱 ❤ </Text>

          <Image
            style={styles.logo}
            source={{uri: urlGato }}
          />

          <TouchableOpacity
            style={styles.boton}
            onPress={() => {

                fetch("https://api.thecatapi.com/v1/images/search?mime_types=gif")
                .then(response => response.json())
                .then((responseJson)=> {

                  setUrlGato(responseJson[0].url)

                  console.log(urlGato)

                })

            }}

          >
              <Text style={styles.botonTxt}>miaauu</Text>
          </TouchableOpacity>


        </View>

      </ScrollView>

    </View>
  );
}


HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({

  logo:{
    marginTop: 20,
    width: '100%',
    height: 400,
  },

  botonTxt:{
    fontSize: 40,
  },

  boton:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 20,
  },

  titulo: {
    fontSize: 30,
    color: '#f2f2f2',
    textAlign: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  contentContainer: {
    paddingTop: 30,
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

});
