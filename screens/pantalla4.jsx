import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Inicio2 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation();
  const handleImagePress = () => {
    navigation.navigate('Inicio3')

  };

  return (
    <View style={styles.container}>
    <Text>
        Hoteles en Maimi
    </Text>
      <View style={styles.scrollViewContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <TouchableOpacity onPress={handleImagePress}>
            <Image
              style={styles.image}
              source={require('../assets/Imagen.png')}
            />
          </TouchableOpacity>
          <Text>
            Holaaaa
          </Text>

          <TouchableOpacity onPress={handleImagePress}>
            <Image
              style={styles.image}
              source={require('../assets/Imagen.png')}
            />
          </TouchableOpacity>
          <Text>
            Holaaaa
          </Text>
          <TouchableOpacity onPress={handleImagePress}>
            <Image
              style={styles.image}
              source={require('../assets/Imagen.png')}
            />
          </TouchableOpacity>
          <Text>
            Holaaaa
          </Text>
          <TouchableOpacity onPress={handleImagePress}>
            <Image
              style={styles.image}
              source={require('../assets/Imagen.png')}
            />
          </TouchableOpacity>
          <Text>
            Holaaaa
          </Text>

        </ScrollView>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 40,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 50,
    paddingHorizontal: 10,
    borderRadius: 20
  },
  scrollViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    aspectRatio: 1, 
  },
});

export default Inicio2;
