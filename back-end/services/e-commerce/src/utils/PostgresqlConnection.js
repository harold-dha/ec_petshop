const { Pool , PoolClient, PoolConfig } = require('pg')
module.exports =  class PostgresqlConnection {
  pool
  constructor(options){
    console.log(options)
    this.pool = new Pool(options)
    // the pool will emit an error on behalf of any idle clients
    // it contains if a backend error or network partition happens
    this.pool.on('error', (err, client) => {
      console.error('Unexpected error on idle client', err)
      process.exit(-1) // fuerza reinicio del servicio
    })

  }
  async getConnection() {
    return this.pool.connect()
  }
  async end() {
    await this.pool.end()
  }
}
