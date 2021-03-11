import express from 'express';
import { get, post } from './router';
import { getByHash, removeByHash, updateByHash } from '../users/hash';

import { addVideo } from './hash/videos';
import { addKeynote } from './hash/keynotes';

import { getVideoByHash, removeVideoByHash } from './hash/videos/hash';
import { getKeynoteByHash, removeKeynoteByHash } from './hash/keynotes/hash';

const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:lessonHash ', getByHash);
router.put('/:lessonHash ', updateByHash);
router.delete('/:lessonHash ', removeByHash);

router.post('/:lessonHash/videos', addVideo);
router.post('/:lessonHash/keynotes', addKeynote);

router.get('/:lessonHash/videos/:videoHash', getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', removeVideoByHash);

router.get('/:lessonHash/keynotes/:keynoteHash', getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', removeKeynoteByHash);

export { router as lessons };
