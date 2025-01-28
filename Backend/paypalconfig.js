const paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', // Change to 'live' for production
    'client_id': 'AWuP9le6W2blEu1U1cpe72b-jmfTUhjkIZRrY0ROBdaxcMx853BvRL8OEGdme0ZwDMJ4s_aOiDhSTMol',
    'client_secret': 'ECrUJfUX_wR57txuFaqVu-yKShDnKz8F_POIUBIuJEY0RrlCS4NHgAjbMHTeRg1Ql-pF1jr_CXVC3vgS'
});

module.exports = paypal;
