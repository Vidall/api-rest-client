import { Router } from 'express';

import { cidadesControllers } from '../controllers';

export const routesCidades = (router: Router) => {

  const rotas = [
    router.post('/cidades', cidadesControllers.createValidator, cidadesControllers.create),
    router.get('/cidades', cidadesControllers.getAllValidator, cidadesControllers.getAll),
    router.get('/cidades/:id', cidadesControllers.GetByIdValidator, cidadesControllers.getById),
    router.put('/cidades/:id', cidadesControllers.UpdateByIdValidator, cidadesControllers.updateById),
    router.delete('/cidades/:id', cidadesControllers.deleteByIdValidator, cidadesControllers.deleteById),

  ];

  return {...rotas};

};
