import { Request, Response } from 'express';
import { getStationsNameAndId, getStationsForGraph } from '../repository/station.repo';
import { Connection } from '../types/connection';
import { Graph } from '../services/Graph';

export const fecthStations = async (req: Request, res: Response) => {
    try {
        const stations = await getStationsNameAndId();
        res.status(200).json({ stations });
    } catch(e) {
        console.log(e);
        res.status(500).json({ message: 'Algo salio mal...' });
    }
}

//start in this point
export const getShortestPath = async (req: Request, res: Response) => {
    
    const { origin, destiny } = req.body;
    
    try {
        const stationConnections: Connection[] = await getStationsForGraph();
        let graph = new Graph(stationConnections);
        const path = graph.dijkstra(origin, destiny);
        res.json({path});

    } catch(e: any) {
        console.log(e);
        res.status(500).json({ msg: 'Algo salió mal...' });
    }
}