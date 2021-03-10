import express from 'express';
import { get, post } from './router';
import { getByHash, updateByHash, removeByHash } from './hash';

const routers = express.Router();

routers.get('/', get);
routers.post('/', post);

routers.get('/:classHash', getByHash);
routers.put('/:classHash', updateByHash);
routers.delete('/:classHash', removeByHash);

export { routers as classes };
