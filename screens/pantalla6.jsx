import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card } from '@rneui/themed';
import { View, Text, Button, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ReservaH from './pantalla7';
import Reserva from './reserva';

const Inicio4 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  
  const navigation = useNavigation();
  const reserva = () => {
    navigation.navigate('ReservaH');

  };

  return (
    <View style={styles.container}>
        <ScrollView>
    <Text style= {{fontSize:25, color:'blue', fontWeight:'bold'}}>
        Habitaciones
    </Text >
    <View>
        <TouchableOpacity onPress={reserva}> 

        <Card  >
            <Card.Title>
            Hotel del Sur
            </Card.Title>
            <Text>
                Cancun, Quintana Roo
            </Text>

            <View style={{flexDirection:'row'}}>
                <View>
                <Image style={{height:200, width:130, marginRight:10 , marginTop:10}} source={require('../assets/Habitacion.jpg')} ></Image>
                </View>
                <View style={{flex:1}}>
                <Text style={{fontWeight: 'bold'}}>
                Habitación súper Star
                </Text>
                <Text style={{color:'#494747'}}>
                Fiesta Americana Reforma features a fitness center, 
                terrace, a restaurant and bar in Mexico City. 
                This 5-star hotel offers room service, a 24-hour front desk and free WiFi.
                </Text>
                <Text>
                    Habitaciones por noche desde:
                </Text>
                <Text style={{fontSize:26, color:'blue', textAlign:'right'}}>
                    MXN$899
                </Text>
                </View>
            </View>
        </Card >
        </TouchableOpacity>



        <TouchableOpacity onPress={reserva}> 

<Card  >
    <Card.Title>
    Hotel del Sur
    </Card.Title>
    <Text>
        Cancun, Quintana Roo
    </Text>

    <View style={{flexDirection:'row'}}>
        <View>
        <Image style={{height:200, width:130, marginRight:10 , marginTop:10}} source={require('../assets/Habitacion.jpg')} ></Image>
        </View>
        <View style={{flex:1}}>
        <Text style={{fontWeight: 'bold'}}>
        Habitación súper Star
        </Text>
        <Text style={{color:'#494747'}}>
        Fiesta Americana Reforma features a fitness center, 
        terrace, a restaurant and bar in Mexico City. 
        This 5-star hotel offers room service, a 24-hour front desk and free WiFi.
        </Text>
        <Text>
            Habitaciones por noche desde:
        </Text>
        <Text style={{fontSize:26, color:'blue', textAlign:'right'}}>
            MXN$899
        </Text>
        </View>
    </View>
</Card >
</TouchableOpacity>




<TouchableOpacity onPress={reserva}> 

<Card  >
    <Card.Title>
    Hotel del Sur
    </Card.Title>
    <Text>
        Cancun, Quintana Roo
    </Text>

    <View style={{flexDirection:'row'}}>
        <View>
        <Image style={{height:200, width:130, marginRight:10 , marginTop:10}} source={require('../assets/Habitacion.jpg')} ></Image>
        </View>
        <View style={{flex:1}}>
        <Text style={{fontWeight: 'bold'}}>
        Habitación súper Star
        </Text>
        <Text style={{color:'#494747'}}>
        Fiesta Americana Reforma features a fitness center, 
        terrace, a restaurant and bar in Mexico City. 
        This 5-star hotel offers room service, a 24-hour front desk and free WiFi.
        </Text>
        <Text>
            Habitaciones por noche desde:
        </Text>
        <Text style={{fontSize:26, color:'blue', textAlign:'right'}}>
            MXN$899
        </Text>
        </View>
    </View>
</Card >
</TouchableOpacity>




<TouchableOpacity onPress={reserva}> 

<Card  >
    <Card.Title>
    Hotel del Sur
    </Card.Title>
    <Text>
        Cancun, Quintana Roo
    </Text>

    <View style={{flexDirection:'row'}}>
        <View>
        <Image style={{height:200, width:130, marginRight:10 , marginTop:10}} source={require('../assets/Habitacion.jpg')} ></Image>
        </View>
        <View style={{flex:1}}>
        <Text style={{fontWeight: 'bold'}}>
        Habitación súper Star
        </Text>
        <Text style={{color:'#494747'}}>
        Fiesta Americana Reforma features a fitness center, 
        terrace, a restaurant and bar in Mexico City. 
        This 5-star hotel offers room service, a 24-hour front desk and free WiFi.
        </Text>
        <Text>
            Habitaciones por noche desde:
        </Text>
        <Text style={{fontSize:26, color:'blue', textAlign:'right'}}>
            MXN$899
        </Text>
        </View>
    </View>
</Card >
</TouchableOpacity>




       
    </View>
    </ScrollView>
    </View>
    
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 40,
  },
});

export default Inicio4;
