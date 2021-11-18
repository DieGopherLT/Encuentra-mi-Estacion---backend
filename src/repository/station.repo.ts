import { getRepository, getManager } from 'typeorm';
import { Request, Response } from 'express';

import { Station } from '../models/Station.model';
import { StationConnection } from '../models/StationConnection.models';

export const getStationsNameAndId = async () => {
    const repo = getRepository(Station);
    return await repo.find({ select: ['id', 'name'] });
}

export const getStationsForGraph = () => {
    try {
        return getManager()
            .createQueryBuilder(Station, 's1')
            .select('s1.id', 'originId')
            .addSelect('s1.`name`', 'originName')
            .addSelect('s1.latitude', 'originLatitude')
            .addSelect('s1.longitude', 'originLongitude')
            .addSelect('sc.weight', 'weight')
            .addSelect('s2.id', 'destinyId')
	        .addSelect('s2.`name`', 'destinyName')
	        .addSelect('s2.latitude', 'destinyLatitude')
	        .addSelect('s2.longitude', 'destinyLongitude')
            .innerJoin(StationConnection, 'sc', 's1.id = sc.originId')
            .innerJoin(Station, 's2', 's2.id = sc.destinyId')
            .getRawMany()
    } catch(e: any) {
        return [];
    }
}