import { Request, Response } from 'express';
import { getStationsNameAndId, getStationsForGraph } from '../repository/station.repo';
import { Connection } from '../types/connection';

export const fecthStations = async (req: Request, res: Response) => {
    try {
        const stations = await getStationsNameAndId();
        res.status(200).json({ stations });
    } catch(e) {
        console.log(e);
        res.status(500).json({ message: 'Algo salio mal...' });
    }
}

export const getShortestPath = async (req: Request, res: Response) => {
    
    // These are the id of origin and destiny sent from GUI
    const { origin, destiny } = req.body;
    
    try {
        // Here is the array for the connections in stations, the data to start working with
        const stationConnections: Connection[] = await getStationsForGraph();
    } catch(e: any) {
        console.log(e);
        res.status(500).json({ msg: 'Algo salió mal...' });
    }
}