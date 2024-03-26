import React, { useState } from 'react';
import { Button, StyleSheet, View, ImageBackground, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReservaH = () => {
  
   const [persona, setPersona] = useState('');
   const [fechaEntrada, setFechaEntrada] = useState(null);
   const [fechaSalida, setFechaSalida] = useState(null);
   const [showDatePicker, setShowDatePicker] = useState(false);
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [selectedField, setSelectedField] = useState('');

   const navigation = useNavigation();

   const Inicio = () => {
     navigation.navigate('Pagos');
   };

   const showDatepicker = (field) => {
     setSelectedField(field);
     setShowDatePicker(true);
   };

   const onDateChange = (event, selectedDate) => {
     setShowDatePicker(false);
     setSelectedDate(selectedDate || selectedDate);
     if (selectedField === 'entrada') {
       setFechaEntrada(selectedDate || selectedDate);
     } else if (selectedField === 'salida') {
       setFechaSalida(selectedDate || selectedDate);
     }
   };

   return (
     <View style={styles.container}>
       <ImageBackground source={require('../assets/fondoReserva.jpg')} style={styles.image}>
       </ImageBackground>

       <Text style= {{color: 'blue',fontSize: 30, fontWeight: 'bold', marginBottom:50}}>Reservar Habitación</Text>

       <View style={styles.inputContainer}>
         <View style={styles.inputIcon}>
           <FontAwesome name="calendar" size={20} color="#4181E1" />
           <TouchableOpacity onPress={() => showDatepicker('entrada')}>
             <TextInput
               style={styles.input}
               placeholder="Fecha de entrada"
               editable={false}
               value={fechaEntrada ? fechaEntrada.toLocaleDateString() : ''}
             />
           </TouchableOpacity>
         </View>
         <View style={styles.inputIcon}>
           <FontAwesome name="calendar" size={20} color="#4181E1" />
           <TouchableOpacity onPress={() => showDatepicker('salida')}>
             <TextInput
               style={styles.input}
               placeholder="Fecha de salida"
               editable={false}
               value={fechaSalida ? fechaSalida.toLocaleDateString() : ''}
             />
           </TouchableOpacity>
         </View>
         <View style={styles.inputIcon}>
           <FontAwesome name="user" size={20} color="#4181E1" />
           <TextInput
             style={styles.input}
             placeholder="Persona"
             value={persona}
             onChangeText={text => setPersona(text)}
             keyboardType='numeric'
           />
         </View>
       </View>

       <TouchableOpacity onPress={Inicio} style={styles.button}>
         <Text style={styles.buttonText}>Pagar</Text>
       </TouchableOpacity>
      
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
  inputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#4181E1',
    borderBottomWidth: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
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
