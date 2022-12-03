const Hapi = require('@hapi/hapi')
const { Pool } = require('pg')
const dotenv = require('dotenv')
const { plugins } = require('./src/documentation/swagger/global-config-swagger')
const constants = require('./src/constants')

if (process.env.NODE_ENV !== 'production') {
  console.log('Cargando archivo de variables de entorno local')
  dotenv.config({ path: './resources/default.env' })
  process.env.STAGE = 'local'
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const options = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  host: process.env.POSTGRES_HOST,
  port: +(process.env.POSTGRES_PORT || '5432'),
  database: process.env.POSTGRES_DATABASE,
  // ssl: true
}
let postgresqlConnection = new Pool(options)

const productosRouter = require('./src/routes/productos.router')
const oArgs = {
  port: process.env.PORT,
  routes: {
    cors: {
      origin: ['*'],
    }
  }
}
let hapiServer = new Hapi.Server(oArgs)

async function registerAllPlugins() {
  try {
   await hapiServer.register(plugins)
   await hapiServer.register([
     {
        plugin: productosRouter,
        options: {
         postgresqlConnection: postgresqlConnection
        }
     }
   ])
  } catch (e) {
   console.log(e)
  }
}

const main = async function () {
  await registerAllPlugins()
  await hapiServer.start()
//   console.log(hapiServer.registrations)
  console.log(`Server running at: ${hapiServer.info.uri}`)
}
module.exports.main = main
