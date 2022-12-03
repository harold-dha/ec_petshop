const { ProductoModel } = require('../model/ProductoModel')

async function listar() {  
  let output = {}
  try {
    let result = await ProductoModel.listar()
    output['data'] = result
  }
  catch (e) {
    console.log(e)
  }
  return output
}

 module.exports.ProductoService = {
  listar
 }