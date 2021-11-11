import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Station } from './Station.model';


@Entity()
export class StationConnection {

    @PrimaryGeneratedColumn('increment')
    id?: number;

    @ManyToOne(() => Station, station => station.originConnection)
    origin?: Station;              

    @ManyToOne(() => Station, station => station.destinyConnection)
    destiny?: Station;

    @Column()
    weight?: number; 
}