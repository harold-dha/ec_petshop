const { ProductoService } = require('../services/ProductosService')

async function listar() {
  let result
  try {
   console.log('inicio de la solicitud listar')
   result = await ProductoService.listar()
   console.log('fin de la solicitud listar')
  }
  catch (e) {
    console.log(e.message)
  }
  return result
}

module.exports.ProductoController = {
  listar
}