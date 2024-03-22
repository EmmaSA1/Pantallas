import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ReservaH = () => {
  
   const [Persona, setPersona] = useState('');
   const [fechaEntrada, setfechaEntrada] = useState('');
   const [fechaSalida, setfechaSalida] = useState('');

   const navigation = useNavigation();

   const Inicio = () => {
     navigation.navigate('Pagos');
   };

   const registrate = () =>{
     navigation.navigate('Registro');
   }
  
   return (
     <View style={styles.container}>
       <ImageBackground source={require('../assets/fondoReserva.jpg')} style={styles.image}>
       </ImageBackground>

       <Text style= {{color: 'blue',fontSize: 30, fontWeight: 'bold', marginBottom:50}}>Reservar Habitación</Text>

       <View style={styles.inputContainer}>
         <TextInput
           style={styles.input}
           placeholder="Fecha de entrada"
           value={fechaEntrada}
         />
         <TextInput
           style={styles.input}
           placeholder="Fecha de salida"
           value={fechaSalida}
         />
         <TextInput
           style={styles.input}
           placeholder="Persona"
           value={Persona}
           keyboardType='numeric'
         />
       </View>

       <TouchableOpacity onPress={Inicio} style={styles.button}>
         <Text style={styles.buttonText}>Pagar</Text>
       </TouchableOpacity>
      
     </View>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    borderRadius: 50
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#002F5D',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    width: '50%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default ReservaH;
