import { dir } from '@stricjs/utils';
import { Router } from '@stricjs/router';

export default new Router()
  .get('/', () => new Response('Hi'))
  .get('/*', dir('./public'));
