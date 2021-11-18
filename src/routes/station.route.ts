import express from 'express';
import { fecthStations, getShortestPath } from '../controllers/station.controller';

const router = express.Router();

router.get('/', fecthStations);
router.post('/', getShortestPath);

export default router;