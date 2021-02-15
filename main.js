require('./globals')

// APPS

const fs = require('fs')

let cert, key, ca, credentials

if (mode == 'prod') {

    cert = fs.readFileSync('/home/ssl/cert.crt')
    key = fs.readFileSync('/home/ssl/key.key')
    ca = fs.readFileSync('/home/ssl/ca.pem')
    credentials = { key, cert, ca }
}

const express = require('express')
const https = require('https')

// FRONTEND ---------------------------------------------------------

const frontendApp = express()
frontendApp.use(express.static(frontendFolder[mode]))
frontendApp.use('/', (req, res) => res.sendFile(`${frontendFolder[mode]}/index.html`, { root: __dirname }))

if (mode == 'dev') {
    frontendApp.listen(frontendPort[mode], () => console.log(`FRONTEND => ${frontendBaseUrl[mode]}`))
} else {
    const frontendAppHttps = https.createServer(credentials, frontendApp)
    frontendAppHttps.listen(frontendPort[mode], '0.0.0.0', () => {
        console.log(`FRONTEND => ${frontendBaseUrl[mode]}`)
    })
}

// API ---------------------------------------------------------

const apiApp = express()

const cors = require('cors')

// middlewares
apiApp.use(express.json())
apiApp.use(cors({ credentials: true }))

// home
apiApp.get('/', (req, res) => {
    res.status(200).send({ result: 'ok', message: 'mp-cho API' })
})

// serve files
apiApp.use('/images', express.static('./@front/src/assets/img'))

// json
apiApp.get('/json', (req, res) => {
    res.status(200).send(JSON.parse(fs.readFileSync('./webHookResponses.json')))
})

// json
apiApp.get('/preference', (req, res) => {
    res.status(200).send(JSON.parse(fs.readFileSync('./preference.json')))
})

// all routes
const allRoutes = require('./routes')
apiApp.use(allRoutes)

// 404
apiApp.use((req, res) => {
    res.status(404).send({ result: 'error', message: 'ivalid endpoint' })
})

// HANDLE ALL ERRORS
// apiApp.use((err, req, res, next) => {
//     res.status(500).send('internal server error')
// })

if (mode == 'dev') {
    apiApp.listen(apiPort[mode], () => console.log(`API => ${apiBaseUrl[mode]}`))
} else {
    const apiAppHttps = https.createServer(credentials, apiApp)
    apiAppHttps.listen(apiPort[mode], '0.0.0.0', () => {
        console.log(`API => ${apiBaseUrl[mode]}`)
    })
}


// Conect to mongodb
// const { MongoClient } = require('mongodb')
// const uri = mongoUrl[mode]
// global.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

// const connect = async () => {
//     try {
//         await client.connect()
//         console.log(`MongoDB connected`)
//     } catch (err) {
//         console.log(err)
//     }
// }

// connect()