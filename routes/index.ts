import express from 'express';

import covidRouter from './covid.router';
import emailRouter from './email.router';

export function routerApi(app: express.Application): void {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/covid', covidRouter);
    router.use('/email', emailRouter);
}