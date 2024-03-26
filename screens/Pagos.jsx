import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

function CreditCardForm({ habitacion }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (value) => {
        setCardNumber(value);
    };

    const handleExpirationChange = (value) => {
        setExpiration(value);
    };

    const handleCvvChange = (value) => {
        setCvv(value);
    };

    const handleSubmit = () => {
        if (cardNumber.length !== 16 || expiration.length !== 5 || cvv.length !== 3) {
            Alert.alert('Error', 'Por favor, ingresa detalles válidos de la tarjeta.', [{ text: 'Aceptar' }]);
            return;
        }
        Alert.alert('Pago exitoso', `¡Gracias por tu pago! Estás reservando la habitación: ${habitacion}`, [{ text: 'Aceptar' }]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pagos</Text>
            <Text style={styles.subtitle}>Ingresa los detalles de tu tarjeta de crédito o débito</Text>
            <TextInput
                style={styles.input}
                placeholder="Número de Tarjeta"
                value={cardNumber}
                onChangeText={handleCardNumberChange}
                maxLength={16}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Fecha de Expiración (MM/AA)"
                value={expiration}
                onChangeText={handleExpirationChange}
                maxLength={5}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="CVV"
                value={cvv}
                onChangeText={handleCvvChange}
                maxLength={3}
                keyboardType="numeric"
            />
            
            <Button title="Pagar" onPress={handleSubmit} style={styles.button} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'blue',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    button: {
        width: 100,
        height: 70,
        padding: 55,
        borderRadius: 10,
        backgroundColor: 'blue',
        marginBottom: 20,
    },
    habitacionText: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default CreditCardForm;
