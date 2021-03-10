import express from 'express';

import { get, post } from './router';
import { getByHash, updateByHash, removeByHash } from './hash';

const router = express.Router();

router.get('/',  get);
router.post('/', post);

router.get('/:userHash', getByHash);
router.put('/:userHash', updateByHash);
router.delete('/:userHash', removeByHash);

export { router as users };

