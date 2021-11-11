import { Entity, PrimaryColumn, Column, ManyToOne, JoinTable } from 'typeorm';
import { Station } from './Station.model';


@Entity()
export class StationConnection {

    @PrimaryColumn()
    id?: number;

    @ManyToOne(() => Station, station => station.originConnection)
    origin?: Station;              

    @ManyToOne(() => Station, station => station.destinyConnection)
    destiny?: Station;

    @Column()
    weight?: number; 
}