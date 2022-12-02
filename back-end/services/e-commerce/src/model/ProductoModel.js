const { Pool } = require('pg')

const options = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    host: process.env.POSTGRES_HOST,
    port: +(process.env.POSTGRES_PORT || '5432'),
    database: process.env.POSTGRES_DATABASE,
    // ssl: true
  }
  const pool = new Pool(options)

async function listar() {
    const columnas = [
        'id',
        'id_categoria',
        'id_grupo',
        'id_marca',
        'codigo_producto',
        'nombre_producto',
        'precio_producto',
        'stock_producto',
        'url_producto',
      ]
    const sql = `SELECT ${columnas.join(',')} FROM producto`
    const result = await pool.query(sql)
    console.log(result.rows)
    return result.rows
}

 module.exports.ProductoModel = {
  listar
}