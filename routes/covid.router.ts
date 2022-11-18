import express from 'express';
import {CovidService} from '../services/covid.service';

const router: express.Router = express.Router();
const service: CovidService = new CovidService();

router.get('/daily', async (req, res, next): Promise<any> => {
    try {
        const data = await service.getCovidData();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

export default router;
