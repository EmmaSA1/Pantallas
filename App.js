  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View } from 'react-native';
  import RegisterScreen from './screens/registro';
  import { TouchableOpacity, Image } from "react-native";
  import { SimpleLineIcons } from '@expo/vector-icons';

import Login from './screens/login';
import Registro from './screens/registro';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import pantalla3 from './screens/pantalla3';
import Inicio2 from './screens/pantalla4';
import Inicio3 from './screens/pantalla5';
import Inicio4 from './screens/pantalla6';
import Reserva from './screens/reserva';
import ReservaH from './screens/pantalla7';
import Pagos from './screens/Pagos';



const Stack = createStackNavigator();

  export default function App() {
  
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Registro" component={Registro} options={{headerShown: false}}/>
        <Stack.Screen name="pantalla3" component={pantalla3} options={{headerShown: false}}/>
        
        <Stack.Screen name="Inicio3" component={Inicio3} options={{headerShown: true,
        tabBarShowLabel: false,
        headerShown: true,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        headerLeft: () => (
            <TouchableOpacity>
                <Image style={{width: 25, height: 25, marginLeft:10}} source={require('./assets/hotel.png')} />
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
            <TouchableOpacity>
               <SimpleLineIcons style={{right:15}} name="menu" size={24} color="black" />
            </TouchableOpacity>

        )
        }}/>


<Stack.Screen name="Inicio4" component={Inicio4} options={{headerShown: true,
        tabBarShowLabel: false,
        headerShown: true,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        headerLeft: () => (
            <TouchableOpacity>
                <Image style={{width: 25, height: 25, marginLeft:10}} source={require('./assets/hotel.png')} />
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
            <TouchableOpacity>
               <SimpleLineIcons style={{right:15}} name="menu" size={24} color="black" />
            </TouchableOpacity>

        )
        }}/>



        
<Stack.Screen name="ReservaH" component={ReservaH} options={{headerShown: true,
        tabBarShowLabel: false,
        headerShown: true,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        headerLeft: () => (
            <TouchableOpacity>
                <Image style={{width: 25, height: 25, marginLeft:10}} source={require('./assets/hotel.png')} />
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
            <TouchableOpacity>
               <SimpleLineIcons style={{right:15}} name="menu" size={24} color="black" />
            </TouchableOpacity>

        )
        }}/>

      </Stack.Navigator>



        
      <Stack.Screen name="Pagos" component={Pagos} options={{headerShown: true,
        tabBarShowLabel: false,
        headerShown: true,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        headerLeft: () => (
            <TouchableOpacity>
                <Image style={{width: 25, height: 25, marginLeft:10}} source={require('./assets/hotel.png')} />
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
            <TouchableOpacity>
               <SimpleLineIcons style={{right:15}} name="menu" size={24} color="black" />
            </TouchableOpacity>

        )
        }}/>

    </NavigationContainer>
    )
  };