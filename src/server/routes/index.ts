import { Router } from 'express';
import { routesCidades } from './Cidades';
import { routesPessoas } from './Pessoas';
const router = Router();

router.get('/', (req, res) => {
  return res.send({'name': 'luan'});
});

routesCidades(router);
routesPessoas(router);

export { router };