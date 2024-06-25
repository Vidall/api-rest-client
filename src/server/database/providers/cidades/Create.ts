import { ETableNames } from '../../ETableNames';
import { ICidade } from '../../models';
import { knex } from '../../knex';

export const create = async (cidade: Omit<ICidade, 'id'>): Promise<{id: number, nome: string} | Error> => {
  try {
    const [result]  = await knex(ETableNames.cidade).insert(cidade).returning(['id', 'nome']);

    if (typeof result === 'object') {
      return {
        id: result.id,
        nome: result.nome
      };
    }

    return new Error('Erro ao cadastrar o registro');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao cadastrar o registro');
  }
};