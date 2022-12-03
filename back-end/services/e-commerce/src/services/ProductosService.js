const { ProductoModel } = require('../model/ProductoModel')

async function listar() {
  console.log('Conexion a bd iniciada')
  let result = []
  try {
    result = await ProductoModel.listar()
  }
  catch (e) {
    console.log(e.message)
    throw(e.message)
  }
  finally {
    console.log('Conexion a bd liberada')
    // pgClient.release()
  }
  return result
}

async function busqueda_individual(codigoProducto) {
    console.log('Conexion a bd iniciada')
    let result = []
    try {
      result = await ProductoModel.busqueda_individual(codigoProducto)
    }
    catch (e) {
      console.log(e.message)
      throw(e.message)
    }
    finally {
      console.log('Conexion a bd liberada')
      // pgClient.release()
    }
    return result[0]
}
 module.exports.ProductoService = {
  listar,
  busqueda_individual
 }