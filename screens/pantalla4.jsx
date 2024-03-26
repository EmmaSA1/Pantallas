import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Inicio2 = () => {
  const navigation = useNavigation();

  const handleHotelPress = () => {
    navigation.navigate('Inicio3');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoteles en Miami</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity onPress={handleHotelPress}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/Imagen.png')}
            />
            <Text style={styles.hotelName}>Hotel 1</Text>
          </View>
        </TouchableOpacity>




        <TouchableOpacity onPress={handleHotelPress}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/Imagen.png')}
            />
            <Text style={styles.hotelName}>Hotel 1</Text>
          </View>
        </TouchableOpacity>




        <TouchableOpacity onPress={handleHotelPress}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/Imagen.png')}
            />
            <Text style={styles.hotelName}>Hotel 1</Text>
          </View>
        </TouchableOpacity>




        <TouchableOpacity onPress={handleHotelPress}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/Imagen.png')}
            />
            <Text style={styles.hotelName}>Hotel 1</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '90%',
    height: 200,
    aspectRatio: 1,
    borderRadius: 10,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Inicio2;
