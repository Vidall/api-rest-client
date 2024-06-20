import { Router } from 'express';
// import { StatusCodes } from 'http-status-codes';

import {cidadesControllers} from '../controllers/cidades';

const router = Router();

router.get('/', (req, res) => {
  return res.send({'name': 'luan'});
});

router.post('/cidades', cidadesControllers.createValidator, cidadesControllers.create);
router.get('/cidades', cidadesControllers.getAllValidator, cidadesControllers.getAll);
router.get('/cidades/:id', cidadesControllers.GetByIdValidator, cidadesControllers.getById);
router.put('/cidades/:id', cidadesControllers.UpdateByIdValidator, cidadesControllers.updateById);
router.delete('/cidades/:id', cidadesControllers.deleteByIdValidator, cidadesControllers.deleteById);

export { router };