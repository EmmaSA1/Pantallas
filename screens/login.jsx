import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const Inicio = () => {
    navigation.navigate('pantalla3');
  };

  const navigation = useNavigation();

  const registrate = () =>{
    navigation.navigate('Registro');
    
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Imagen.png')} style={styles.image}>
        <View style= {{flexDirection:"row", paddingTop:100, alignCenter:"center", left: '30%'}}>
        <Text style={styles.imageText}>APREHO</Text>
        <Image style={{width:70, height:70}} source={require('../assets/hotel.png')}/>
        </View>
      </ImageBackground>

      <Text style= {{color: 'blue',fontSize: 30, fontWeight: 'bold', marginBottom:50}}>Login</Text>



      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={username}
        onChangeText={handleUsernameChange}
      />

      <TextInput
        style={styles.input1 }
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />

<TouchableOpacity onPress={Inicio} style={styles.button}>
            <Text  style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
      <View style={styles.additionalTextContainer}>
        <Text>¿No tienes cuenta?</Text>
        <TouchableOpacity onPress={registrate}>
        <Text>Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  imageText: {
    position: 'absolute',
    top: '220%',
    left: '30%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  input: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 40,
    paddingHorizontal: 10,
    width: '70%',
  },
  input1: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 150,
    paddingHorizontal: 10,
    width: '70%',
  },
  button: {
    backgroundColor: '#002F5D',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginLeft: '25%',
    marginRight: '25%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
      },
  additionalTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 60,
  },
});

export default Login;
