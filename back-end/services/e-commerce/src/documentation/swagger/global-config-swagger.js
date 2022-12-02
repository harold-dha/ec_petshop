const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger')

const swaggerOptions = {
    swaggerUI: true,
    swaggerUIPath: '/v1/ec_petshop-backend/documentation/',
    documentationPath: '/v1/ec_petshop-backend/documentation',
    jsonPath: '/v1/ec_petshop-backend/documentation/',
    info: {
        title: 'E-commerce PetShop: Backend Documentation',
        version: '1.0.0',
    },
}
const plugins = [ 
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
]
module.exports.plugins = plugins
