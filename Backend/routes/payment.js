const express = require('express');
const paypal = require('../paypalconfig'); // Import the PayPal configuration
const router = express.Router();

router.post('/create-payment', (req, res) => {
    const { amount } = req.body;

    const create_payment_json = {
        intent: 'sale',
        payer: {
            payment_method: 'paypal'
        },
        redirect_urls: {
            return_url: 'http://localhost:3000/success', // Change as necessary
            cancel_url: 'http://localhost:3000/cancel'
        },
        transactions: [{
            item_list: {
                items: [{
                    name: 'Booking',
                    price: amount,
                    currency: 'USD',
                    quantity: 1
                }]
            },
            amount: {
                currency: 'USD',
                total: amount
            },
            description: 'Booking Payment'
        }]
    };

    paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
            console.error(error);
            res.status(500).send(error);
        } else {
            res.json(payment);
        }
    });
});

router.get('/success', (req, res) => {
    // Handle successful payment
    res.send('Payment was successful!');
});

router.get('/cancel', (req, res) => {
    // Handle canceled payment
    res.send('Payment was canceled.');
});

module.exports = router;
