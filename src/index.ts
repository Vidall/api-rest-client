import { server } from './server/Server';


/* eslint-disable no-undef */
server.listen(process.env.PORT||3000, () => {
  console.log('Backend executando');
});
