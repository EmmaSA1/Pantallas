import { useNavigation } from '@react-navigation/native';
import { CheckBox } from '@rneui/themed';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
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
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

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

  const navigation = useNavigation();

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
    setFechaNacimiento(currentDate); // Actualizar el estado de la fecha de nacimiento
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Imagen.png')} style={styles.image}>
        <View style={{ flexDirection: "row", paddingTop: 100, alignCenter: "center", left: '30%' }}>
          <Text style={styles.imageText}>APREHO</Text>
          <Image style={{ width: 70, height: 70 }} source={require('../assets/hotel.png')} />
        </View>
      </ImageBackground>

      <Text style={{ color: 'blue', fontSize: 30, fontWeight: 'bold', marginBottom: 35 }}> Registrate</Text>

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
        rightIcon={() => (
          <TouchableOpacity onPress={showDatepicker}>
            <FontAwesome name="calendar" size={24} color="black" />
          </TouchableOpacity>
        )}
        style={styles.input5}
        placeholder="Fecha de Nacimiento"
        value={fechaNacimiento ? fechaNacimiento.toLocaleDateString() : ''}
        onChangeText={handleFechaNacimientoChange}
      />

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />
      )}

      <TouchableOpacity onPress={regresarLogin} style={styles.button}>
        <Text style={styles.buttonText}>Registrate</Text>
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 5,
  },
  imageText: {
    position: 'absolute',
    top: '220%',
    left: '30%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 5,
    paddingHorizontal: 10,
    width: '70%',
  },
  input1: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 5,
    paddingHorizontal: 10,
    width: '35%',
    marginRight: 5
  },
  input2: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 5,
    paddingHorizontal: 10,
    width: '35%',
    marginLeft: 5
  },
  input3: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 5,
    paddingHorizontal: 10,
    width: '70%',
  },
  input4: {
    height: 40,
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 5,
    paddingHorizontal: 10,
    width: '70%',
  },
  input5: {
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    paddingHorizontal: 70,
  },
  
  button: {
    backgroundColor: '#002F5D',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '50%', 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  label: {
    marginLeft: 3,
    flexDirection: 'row',
  },
});

export default Registro;