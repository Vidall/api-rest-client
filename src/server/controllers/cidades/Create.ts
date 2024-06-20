import { Request, Response } from 'express';
// Biblioteza yup para validações
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface ICidade {
  nome: string
}


/*yup.Schema vincula a interface ICidade com o bodyValidation*/
/*schema de validação com a lib yup*/
export const createValidator = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
}));


// create função para criar a cidade
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {//a tipagem do 2° param é para

  console.log(req.body);

  return res.status(StatusCodes.CREATED).json(1);
};