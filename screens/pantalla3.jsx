import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import reserva from "./reserva";
import Pagos from "./Pagos";
import Inicio2 from './pantalla4';

const Tab = createBottomTabNavigator();

const MenuDesplegable = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
        <SimpleLineIcons style={styles.menuIcon} name="menu" size={24} color="black" />
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.option}>
            <Text>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Tienda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Mis Habitaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Pagos</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const TabBarIcon = ({ focused, icon }) => {
  return (
    <View style={styles.iconContainer}>
      {icon}
    </View>
  );
};

const Pantalla3 = () => {
  return (
    <Tab.Navigator initialRouteName="Inicio2" screenOptions={{
      headerLeft: () => (
        <TouchableOpacity>
          <Image style={{ width: 25, height: 25, marginLeft: 10 }} source={require('../assets/hotel.png')} />
        </TouchableOpacity>
      ),
      title: 'APREHO',
      headerTitleStyle: {
        color: 'blue',
      },
      headerBackTitleVisible: false,
      headerTintColor: 'white',
      tabBarLabelStyle: { fontSize: 15 },
      headerRight: () => (
        <MenuDesplegable />
      ),
    }}>
      <Tab.Screen name="reserva" component={reserva} options={{
        tabBarShowLabel: false,
        headerShown: true,
        tabBarIcon: ({ color, size, focused }) => (
          <TabBarIcon focused={focused} icon={<Image style={{ width: 25, height: 25, marginLeft: 10 }} source={require('../assets/Icono1.png')} />} />
        ),
      }} />

      <Tab.Screen name="Inicio2" component={Inicio2} options={{
        tabBarShowLabel: false,
        headerShown: true,
        title: 'APREHO',
        tabBarIcon: ({ color, size, focused }) => (
          <TabBarIcon focused={focused} icon={<Image style={{ width: 25, height: 25, marginLeft: 10}} source={require('../assets/hotel.png')} />} />
        ),
      }} />

      <Tab.Screen name="Pagos" component={Pagos} options={{
        tabBarShowLabel: false,
        headerShown: true,
        title: 'APREHO',
        tabBarIcon: ({ color, size, focused }) => (
          <TabBarIcon focused={focused} icon={<Image style={{ width: 25, height: 25, marginLeft: 10 }} source={require('../assets/Pago.png')} />} />
        ),
      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    right: 15,
  },
  menu: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
  },
  option: {
    paddingVertical: 5,
  },
  iconContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default Pantalla3;
