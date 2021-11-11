import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import { Station } from '../models/Station.model';
import { StationConnection } from '../models/StationConnection.models';

export const getStations = async () => {
    const repo = getRepository(Station);
    return await repo.find();
}