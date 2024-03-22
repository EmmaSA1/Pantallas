import { useNavigation } from '@react-navigation/native';
import { CheckBox } from '@rneui/themed';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, ImageBackground, Text, Image, TouchableOpacity, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input } from '@rneui/base';
import { FontAwesome } from '@expo/vector-icons';




const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [curp, setCurp] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [genero, setGenero] = useState('');



  const handleNombreChange = (text) => {
    setNombre(text);
  };

  const handlePrimerApellidoChange = (text) => {
    setPrimerApellido(text);
  };

  const handleSegundoApellidoChange = (text) => {
    setSegundoApellido(text);
  };

  const handleCurpChange = (text) => {
    setCurp(text);
  };

  const handleCorreoChange = (text) => {
    setCorreo(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmationPasswordChange = (text) => {
    setPassword(text);
  };

  const handleFechaNacimientoChange = (date) => {
    setFechaNacimiento(date);
  };

  const regresarLogin = () => {
    navigation.navigate('Login');
  };
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Imagen.png')} style={styles.image}>
        <View style={{ flexDirection: "row", paddingTop: 100, alignCenter: "center", left: '30%' }}>
          <Text style={styles.imageText}>APREHO</Text>
          <Image style={{ width: 70, height: 70 }} source={require('../assets/hotel.png')} />
        </View>
      </ImageBackground>

      <Text style={{ color: 'blue', fontSize: 30, fontWeight: 'bold', marginBottom: 50 }}> Registrate</Text>


      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={handleNombreChange}
      />
      <View style={{ flexDirection: 'row', }} >
        <TextInput
          style={styles.input1}
          placeholder="Primer Apellido"
          value={primerApellido}
          onChangeText={handlePrimerApellidoChange}
        />
        <TextInput
          style={styles.input2}
          placeholder="Segundo Apellido"
          value={segundoApellido}
          onChangeText={handleSegundoApellidoChange}
        />
      </View>

      <TextInput
        style={styles.input3}
        placeholder="Correo"
        value={correo}
        onChangeText={handleCorreoChange}

      />

      <TextInput
        style={styles.input4}
        placeholder="CURP"
        value={curp}
        onChangeText={handleCurpChange}
      />



      <TextInput
        style={styles.input4}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />

      <TextInput
        style={styles.input4}
        placeholder="Confirmación de Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={handleConfirmationPasswordChange}
      />


      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', marginRight: 20 }}>
          <CheckBox
            containerStyle={{ backgroundColor: '#F2F2F2' }}
            checked={genero === 0}
            onPress={() => setGenero(0)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <Text style={styles.label}>Hombre</Text>
        </View>

        <View>
          <CheckBox
            containerStyle={{ backgroundColor: '#F2F2F2' }}
            checked={genero === 1}
            onPress={() => setGenero(1)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <Text style={styles.label}>Mujer</Text>
        </View>
      </View>


      <Input
      disabled
        rightIcon={() => (<TouchableOpacity onPress={showDatepicker}>
          <FontAwesome name="calendar" size={24} color="black" />
        </TouchableOpacity>)}
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        value={date.toLocaleString()}
        onChangeText={handleFechaNacimientoChange}
      >
      </Input>




      <TouchableOpacity onPress={regresarLogin} style={styles.button}>
        <Text style={styles.buttonText}>Registrate</Text>
      </TouchableOpacity>



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
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '70%',
  },
  input1: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '35%',
    marginRight: 5
  },
  input2: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '35%',
    marginLeft: 5
  },
  input3: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '70%',
  },
  input4: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '70%',
  },
  input5: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 100,
    paddingHorizontal: 50,
    width: '70%',
  },
  input6: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 100,
    paddingHorizontal: 50,
    width: '70%',

  },
  button: {
    backgroundColor: '#002F5D',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: 20,

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  label: {
    marginLeft: 8,
    flexDirection: 'row'

  },
});

export default Registro;
