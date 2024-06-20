import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

/*eslint-disable*/

describe('cidades - deletar', () => {



  it('apaga registro', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({nome: 'Angra dos reis'});

    const resApagada = await testServer
      .delete(`/cidades/${res1.body}`)
      .send()


      expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT)
  });

  it('tenta deletar id que não existe', async() => {
    const res1 = await testServer
      .delete('/cidades/9999')
      .send()


    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(res1.body).toHaveProperty('errors.default')
   })


});
