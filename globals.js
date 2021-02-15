const ip = require('ip')
const domain = 'endigital.store'

// mode dev | prod
const mode = process.env.MODE
global.mode = mode || 'dev'

// ip local wifi connection
let wifiIp
if (mode == 'dev') {
    wifiIp = ip.address('wifi')
} else {
    wifiIp = '0.0.0.0'
}

console.clear()
console.log(`${mode.toUpperCase()} mode`)

global.frontendPort = {
    dev: 500,
    prod: 500
}

global.apiPort = {
    dev: 300,
    prod: 300
}

global.frontendBaseUrl = {
    dev: `http://${wifiIp}:${frontendPort[mode]}/`,
    prod: `https://${domain}:${frontendPort[mode]}/`
}

global.apiBaseUrl = {
    dev: `http://${wifiIp}:${apiPort[mode]}/`,
    prod: `https://${domain}:${apiPort[mode]}/`
}

global.frontendFolder = {
    dev: './@front/dist',
    prod: './@front/dist'
}

// MONGO

// global.mongoUrl = {
//     dev: 'mongodb://localhost:27017',
//     prod: 'mongodb://localhost:27017'
// }
