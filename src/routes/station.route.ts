import express from 'express';
import { fecthStations } from '../controllers/station.controller';

const router = express.Router();

router.get('/', fecthStations);

export default router;