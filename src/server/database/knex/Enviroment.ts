import {Knex} from 'knex';
import path from 'path';

/*eslint-disable*/

export const development: Knex.Config = {
  client: 'sqlite',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, '..', '..', '..', '..', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, '..', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, '..', 'seeds')
  },
  // pool especifico para o sqlite
  pool: {
    afterCreate: (connection: any, done: Function) => {
      connection.run('PRAGMA forign_keys = ON'); // habilitar vinculo de chave estrangeira
      done(); // termino de configurar
    }
  }
};

//quando desliga o servidor ele zera tudos dados
export const test: Knex.Config = {
  ...development,
  connection: 'memory' // salva o dados em momoria
};

export const production: Knex.Config = {
  ...development,
};

