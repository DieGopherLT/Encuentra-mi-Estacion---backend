import { Vertex } from './Vertex';

export class Edge {
    public destination : Vertex;
    public wegiht : number;

    constructor( destination : Vertex, weight : number ) {
        this.destination = destination;
        this.wegiht = weight;
    }
}