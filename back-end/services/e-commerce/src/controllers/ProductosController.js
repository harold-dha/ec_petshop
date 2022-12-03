const { ProductoService } = require('../services/ProductosService')
const output = {}

async function listar() {
    const id = request.info.id
  try {
    console.log('inicio de la solicitud listar')
    console.log('id solicitud', id)
    let result = await ProductoService.listar()
    output['data'] = result
    console.log('fin de la solicitud listar')
  }
  catch (e) {
    console.log(e.message)
    output['error'] = e.message
  }
  return output
}

async function busqueda_individual(request) {
    const query = request.query
    const id = request.info.id
    try {
     console.log('inicio de la solicitud busqueda_individual')
     console.log('id solicitud', id)
     console.log('query parameters', query)
     let result = await ProductoService.busqueda_individual(query.codigo_producto)
     output['data'] = result
     console.log('fin de la solicitud busqueda_individual')
    }
    catch (e) {
      console.log(e.message)
      output['error'] = e.message
    }
    return output
  }

module.exports.ProductoController = {
  listar,
  busqueda_individual
}