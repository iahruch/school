// Core
import express from 'express';

import { getPassword, NotFoundError } from './utils';

//Handlers
import * as handlers from './handlers';
import * as routers from './routers';

const app = express();

// Check password
app.use(getPassword);

// Routers
app.use('/auth', routers.auth);
app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

// Check 404
app.use('*', (req, res, next) => {
    next(
        new NotFoundError(
            `Cant find method: ${req.method} and path: ${req.originalUrl}`
        )
    );
});

// Error hanler
app.use(handlers.errorHandler);

export { app };
