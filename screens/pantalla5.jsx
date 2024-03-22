import { useNavigation } from '@react-navigation/native';

import { Button } from '@rneui/base';
import React, { useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions,
    Image
} from 'react-native';

const images = [
    'https://foodandtravel.mx/wp-content/uploads/2020/06/Reapertura-hoteles-por.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
    'https://cdn.forbes.com.mx/2020/07/hoteles-Grand-Velas-Resorts-e1596047698604.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
    'https://realestatemarket.com.mx/images/2022/02-feb/1002/nuevos-hoteles-en-mexico-ok-g.jpg',
    'https://cnnespanol.cnn.com/wp-content/uploads/2022/08/220823201153-mejores-hoteles-pba-full-169.jpeg?quality=100&strip=info'
];


const Inicio3 = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();
    const navigation = useNavigation();

const reservaHabitacion = () =>{
    navigation.navigate('Inicio4');
}

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView>
                    <View style={styles.scrollContainer}>
                        <ScrollView
                            horizontal={true}
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={Animated.event([
                                { nativeEvent: { contentOffset: { x: scrollX } } },
                            ])}
                            scrollEventThrottle={1}>
                            {images.map((image, imageIndex) => {
                                return (
                                    <View style={{ width: windowWidth, height: 250 }} key={imageIndex}>
                                        <ImageBackground source={{ uri: image }} style={styles.card} />
                                    </View>
                                );
                            })}
                        </ScrollView>
                        <View style={styles.indicatorContainer}>
                            {images.map((image, imageIndex) => {
                                const width = scrollX.interpolate({
                                    inputRange: [
                                        windowWidth * (imageIndex - 1),
                                        windowWidth * imageIndex,
                                        windowWidth * (imageIndex + 1),
                                    ],
                                    outputRange: [8, 16, 8],
                                    extrapolate: 'clamp',
                                });
                                return (
                                    <Animated.View key={imageIndex} style={[styles.normalDot, { width }]} />
                                );
                            })}
                        </View>
                    </View>
                    <View style={styles.bottomContent}>
                        <Text style={styles.bottomText}>Maimi</Text>
                        <Button onPress={reservaHabitacion} title={'Reservar Habitacion'} />
                    </View>
                    <View style={styles.iconsContainer}>
                        <Text style={{ justifyContent: 'row' }}>
                            Servicios Principales
                        </Text>


                        <View style={styles.iconsContainer}>
                            <View style={styles.iconItem}>
                                <Image style={styles.iconImage} source={require('../assets/bed.png')} />
                                <Text style={styles.iconText}>Cama matrimonial</Text>
                            </View>

                            <View style={styles.iconItem}>
                                <Image style={styles.iconImage} source={require('../assets/bedroom.png')} />
                                <Text style={styles.iconText}>Baño completo</Text>
                            </View>

                            <View style={styles.iconItem}>
                                <Image style={styles.iconImage} source={require('../assets/jacuzi.png')} />
                                <Text style={styles.iconText}>Jacuzzi</Text>
                            </View>
                            
                            <View style={styles.iconItem}>
                                <Image style={styles.iconImage} source={require('../assets/facade.png')} />
                                <Text style={styles.iconText}>Terraza</Text>
                            </View>

                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    scrollContainer: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: 'silver',
        marginHorizontal: 4,
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    bottomContent: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    bottomText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 40,
        color: 'blue',
        fontSize: 25, 
        fontWeight: 'bold'
    },
    iconsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      iconItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10, // Espacio entre cada ícono
      },
      iconImage: {
        height: 50,
        width: 50,
        marginRight: 10, // Espacio entre la imagen y el texto
      },
      iconText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default Inicio3;
