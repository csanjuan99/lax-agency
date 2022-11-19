import express, {Express, Request, Response} from 'express';
import {routerApi} from './routes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

const options: cors.CorsOptions = {
    origin: '*',
};

app.use(cors(options));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

routerApi(app);

app.listen(3000);