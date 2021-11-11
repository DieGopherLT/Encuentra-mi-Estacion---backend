import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import { Station } from '../models/Station.model';
import { StationConnection } from '../models/StationConnection.models';

export const getStationsNameAndId = async () => {
    const repo = getRepository(Station);
    return await repo.find({ select: ['id', 'name'] });
}