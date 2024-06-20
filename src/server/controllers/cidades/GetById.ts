import { Request, Response } from 'express';
// Biblioteza yup para validações
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
  id?: number
}


/*yup.Schema vincula a interface ICidade com o bodyValidation*/
/*schema de validação com a lib yup*/
export const GetByIdValidator = validation((getSchema) => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));


// create função para pegar todas cidades
export const getById = async (req: Request<IParamProps, {}, {}>, res: Response) => {//a tipagem do 2° param é para

  if (Number(req.params.id) === 9999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Cidade não localizada'
    }
  });

  return res.status(StatusCodes.ACCEPTED).json({
    id: req.params.id,
    nome: 'Angra dos Reis'
  });
};