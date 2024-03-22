import React, { useState } from 'react';


const navigation = useNavigation();

const Inicio = () => {
    navigation.navigate('pantalla3');
  };

  const registrate = () =>{
    navigation.navigate('Pagos');
  }

function Pagos() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
    };

    const handleExpirationChange = (event) => {
        setExpiration(event.target.value);
    };

    const handleCvvChange = (event) => {
        setCvv(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar la lógica de validación o enviar los datos a un servidor
    };

    return (
        <div>
            <h2>Ingresa los detalles de tu tarjeta de crédito</h2>
            <form onSubmit={handleSubmit}>
                <label>Número de Tarjeta:</label>
                <input
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength="16"
                    required
                />
                <br />
                <label>Fecha de Expiración:</label>
                <input
                    type="text"
                    value={expiration}
                    onChange={handleExpirationChange}
                    placeholder="MM/AA"
                    maxLength="5"
                    required
                />
                <br />
                <label>CVV:</label>
                <input
                    type="text"
                    value={cvv}
                    onChange={handleCvvChange}
                    maxLength="3"
                    required
                />
                <br />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Pagos;
