const createPreference = (req, res) => {

    const keys = {
        collector_id: 469485398,
        publicKey: 'APP_USR-7eb0138a-189f-4bec-87d1-c0504ead5626',
        accessToken: 'APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398'
    }

    const integratorId = 'dev_24c65fb163bf11ea96500242ac130004'

    const product = req.body

    // const product = {
    //     name: 'prueba',
    //     price: 100,
    //     picture: 'moto.png'
    // }

    let preference = {
        items: [{
            id: '1234',
            title: product.name,
            currency_id: 'ARS',
            picture_url: `${apiBaseUrl[mode]}images/${product.picture}`,
            description: 'Dispositivo móvil de Tienda e-commerce',
            category_id: 'art',
            quantity: 1,
            unit_price: product.price
        }],
        payer: {
            name: 'Lalo',
            surname: 'Landa',
            email: 'test_user_63274575@testuser.com',
            phone: {
                area_code: '11',
                number: '22223333'
            },
            // identification: {
            //     type: 'DNI',
            //     number: '12345678'
            // },
            address: {
                street_name: 'False',
                street_number: 123,
                zip_code: '1111'
            }
        },
        back_urls: {
            success: `${frontendBaseUrl[mode]}success`,
            failure: `${frontendBaseUrl[mode]}failure`,
            pending: `${frontendBaseUrl[mode]}pending`
        },
        auto_return: 'approved',
        payment_methods: {
            excluded_payment_methods: [{
                id: 'amex'
            }],
            excluded_payment_types: [{
                id: 'atm'
            }],
            installments: 6
        },
        notification_url: `${apiBaseUrl['prod']}webHook`,
        // notification_url: 'https://2716a6872970.ngrok.io/webHook',
        statement_descriptor: 'Tienda e-commerce',
        external_reference: 'jorge.arraga@gmail.com',
        // expires: true,
        // expiration_date_from: '2016-02-01T12:00:00.000-04:00',
        // expiration_date_to: '2016-02-28T12:00:00.000-04:00'
    }

    const fs = require('fs')
    const fetch = require('node-fetch')

    const headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${keys.accessToken}`,
        'Content-Type': 'application/json',
        'x-integrator-id': integratorId,
        'X-meli-session-id': product.deviceId
    }

    fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'post',
        headers,
        body: JSON.stringify(preference)
    })
        .then(r => r.json())
        .then(r => {
            res.status(200).send({ result: 'ok', initPoint: r.init_point })
            fs.writeFileSync(`${__dirname}/../preference.json`, JSON.stringify(r))
            // console.log(r.sandbox_init_point)
            // console.log(r.init_point)
            // console.log(r)
        })
        .catch(err => console.log(err))

}

module.exports = { createPreference }