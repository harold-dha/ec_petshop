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
        descripcion_producto: Joi.string().required().description('descripcion_producto'),
        precio_producto: Joi.string().required().description('precio_producto'),
        stock_producto: Joi.number().required().description('stock_producto'),
        url_producto: Joi.string().required().description('url_producto'),
      })
      )
    }).label('listar-producto-response-200')
  }
}

const requestBusquedaIndividual = {
    query: Joi.object({
      codigo_producto: Joi.string().required().description('Codigo de producto'),
    })
}

const responseBusquedaIndividual = {
  status: {
    200: Joi.object({
      data: Joi.object({
        id: Joi.string().required().description('id'),
        id_categoria: Joi.string().required().description('id_categoria'),
        id_grupo: Joi.string().required().description('id_grupo'),
        id_marca: Joi.string().required().description('id_marca'),
        codigo_producto: Joi.string().required().description('codigo_producto'),
        nombre_producto: Joi.string().required().description('nombre_producto'),
        descripcion_producto: Joi.string().required().description('descripcion_producto'),
        precio_producto: Joi.string().required().description('precio_producto'),
        stock_producto: Joi.number().required().description('stock_producto'),
        url_producto: Joi.string().required().description('url_producto'),
      })
    }).label('busqueda_individual-producto-response-200')
  }
}

module.exports = {
    requestListarProductos,
    responseListarProductos,
    requestBusquedaIndividual,
    responseBusquedaIndividual
}