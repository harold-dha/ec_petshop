const Hapi = require('@hapi/hapi')
const { requestListarProductos, responseListarProductos, requestBusquedaIndividual, responseBusquedaIndividual } = require('../documentation/swagger/productos-swagger')
const { ProductoController } = require('../controllers/ProductosController')

async function register(server, options) {
    server.route({
      method: 'GET',
      path: '/v1/ec_petshop-backend/productos/listar',
      options: {
        description: 'Lista de productos',
        notes: 'Operacion Lista de productos',
        tags: ['api'],
        validate: requestListarProductos,
        response: responseListarProductos,
        handler: async function(request, h) {
          const result = await ProductoController.listar();
          return result
        }
      }
    })
    server.route({
        method: 'GET',
        path: '/v1/ec_petshop-backend/productos/busqueda_individual',
        options: {
          description: 'Busqueda individual de productos',
          notes: 'Operacion Busqueda individual de productos',
          tags: ['api'],
          validate: requestBusquedaIndividual,
          response: responseBusquedaIndividual,
          handler: async function(request, h) {
            const result = await ProductoController.busqueda_individual(request);
            return result
          }
        }
      })
}
module.exports = {
    name: 'plugins.router.producto',
    version: '1.0.0',
    register: register
}