import express from 'express';
import { login, logout } from './router';
const routers = express.Router();

routers.post('/login', login);
routers.post('/logout', logout);

export { routers as auth };
