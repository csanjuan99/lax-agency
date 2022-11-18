import express, {Express, Request, Response} from 'express';
import {routerApi} from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

routerApi(app);

app.listen(3000);