const Joi = require('joi');

const requestListarProductos = {
    query: Joi.object({
    })
}

const responseListarProductos = {
  status: {
    200: Joi.object({
      data: Joi.array().items(
      Joi.object({
        id: Joi.string().required().description('id'),
        id_categoria: Joi.string().required().description('id_categoria'),
        id_grupo: Joi.string().required().description('id_grupo'),
        id_marca: Joi.string().required().description('id_marca'),
        codigo_producto: Joi.string().required().description('codigo_producto'),
        nombre_producto: Joi.string().required().description('nombre_producto'),
        precio_producto: Joi.string().required().description('precio_producto'),
        stock_producto: Joi.number().required().description('stock_producto'),
        url_producto: Joi.string().required().description('url_producto'),
      })
      )
    })
  }
}

module.exports = {
    requestListarProductos,
    responseListarProductos
}