import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card } from '@rneui/themed';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ReservaH from './pantalla7';

const Inicio4 = () => {
  const navigation = useNavigation();

  const reserva = () => {
    navigation.navigate('ReservaH');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habitaciones</Text>
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity onPress={reserva}>
          <Card style={styles.card}>
            <Image style={styles.image} source={require('../assets/Habitacion.jpg')} />
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.hotelName}>Habitación Súper Star</Text>
                <Text style={styles.stars}>★★★★★</Text>
              </View>
              <Text style={styles.location}>Cancún, Quintana Roo</Text>
              <Text style={styles.season}>Temporada: Alta</Text>
              <Text style={styles.price}>MXN$899 por noche</Text>
            </View>
          </Card>
        </TouchableOpacity>



        <TouchableOpacity onPress={reserva}>
          <Card style={styles.card}>
            <Image style={styles.image} source={require('../assets/Habitacion.jpg')} />
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.hotelName}>Habitación Súper Star</Text>
                <Text style={styles.stars}>★★★★★</Text>
              </View>
              <Text style={styles.location}>Cancún, Quintana Roo</Text>
              <Text style={styles.season}>Temporada: Alta</Text>
              <Text style={styles.price}>MXN$899 por noche</Text>
            </View>
          </Card>
        </TouchableOpacity>




        <TouchableOpacity onPress={reserva}>
          <Card style={styles.card}>
            <Image style={styles.image} source={require('../assets/Habitacion.jpg')} />
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.hotelName}>Habitación Súper Star</Text>
                <Text style={styles.stars}>★★★★</Text>
              </View>
              <Text style={styles.location}>Cancún, Quintana Roo</Text>
              <Text style={styles.season}>Temporada: Alta</Text>
              <Text style={styles.price}>MXN$899 por noche</Text>
            </View>
          </Card>
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
  },
  title: {
    fontSize: 25,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  card: {
    marginBottom: 20,
    width: '90%',
  },
  image: {
    height: 200,
    width: '100%',
    marginBottom: 10,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  hotelName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  stars: {
    fontSize: 16,
    color: '#FFD700',
  },
  location: {
    color: '#494747',
    marginBottom: 5,
  },
  season: {
    color: '#6B8E23',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'right',
  },
});

export default Inicio4;
