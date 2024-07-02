import { Router } from 'express';

import { alunosControllers } from '../controllers';

export const routesPessoas = (router: Router) => {

  const rotas = [
    router.post('/alunos', alunosControllers.createValidation, alunosControllers.create),
    router.get('/alunos', alunosControllers.getAllValidation, alunosControllers.getAll),
    router.get('/alunos/:id', alunosControllers.getByIdValidation, alunosControllers.getById),
    router.put('/alunos/:id', alunosControllers.UpdateByIdValidation, alunosControllers.updateById),
    router.delete('/alunos/:id', alunosControllers.deletByIdValidation, alunosControllers.deleteById),

  ];

  return {...rotas};

};
