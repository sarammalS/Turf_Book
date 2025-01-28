// client/src/components/PayPalButton.js
import React, { useEffect } from 'react';
import axios from 'axios';

const PayPalButton = ({ amount }) => {
    useEffect(() => {
        const loadPayPalScript = () => {
            const script = document.createElement('script');
            script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID';
            script.async = true;
            script.onload = () => {
                window.paypal.Buttons({
                    createOrder: async (data, actions) => {
                        const response = await axios.post('/api/payment/create-payment', { amount });
                        return response.data.id; // Return the order ID
                    },
                    onApprove: async (data, actions) => {
                        await actions.order.capture();
                        alert('Transaction completed');
                        // Optionally redirect or update state here
                    },
                    onError: (err) => {
                        console.error(err);
                        alert('An error occurred during the transaction');
                    },
                }).render('#paypal-button-container');
            };
            document.body.appendChild(script);
        };

        loadPayPalScript();
    }, [amount]);

    return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
