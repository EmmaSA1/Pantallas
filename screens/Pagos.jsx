import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

function CreditCardForm() {
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
        // Aquí puedes realizar la lógica de validación o enviar los datos a un servidor
    };

    return (
        <View style={styles.container}>
          <View>
          <Text style= {{color: 'blue',fontSize: 30, fontWeight: 'bold', marginBottom:50  }}>Pagos</Text>
          </View>
          


            <Text style={styles.title}>Ingresa los detalles de tu tarjeta de crédito o débito</Text>
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
            <Button title="Enviar" onPress={handleSubmit} />
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
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

export default CreditCardForm;
