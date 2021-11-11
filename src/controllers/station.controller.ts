import { Request, Response } from 'express';
import { getStations } from '../repository/station.repo';

export const fecthStations = async (req: Request, res: Response) => {
    try {
        const stations = await getStations();
        res.status(200).json({ stations });
    } catch(e) {
        console.log(e);
        res.status(500).json({ message: 'Algo salio mal...' });
    }
}