import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { StationConnection } from './StationConnection.models';

@Entity()
export class Station {

    @PrimaryColumn()
    id?: number;

    @Column({ length: 20 })
    name?: string;

    @Column({ type: 'decimal', scale: 15, precision: 20 })
    latitude?: number;

    @Column({ type: 'decimal', scale: 15, precision: 20 })
    longitude?: number;

    @OneToMany(() => StationConnection, conn => conn.origin)
    originConnection?: StationConnection[];

    @OneToMany(() => StationConnection, conn => conn.destiny)
    destinyConnection?: StationConnection[];
}