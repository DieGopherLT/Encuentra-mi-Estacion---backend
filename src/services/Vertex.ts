import { Edge } from "./Edge";

export class Vertex {
    public id : number;
    public edges :Edge[];

    constructor ( id : number = 0)  {
        this.id = id;
        this.edges = [];
    }

    addEdge( destination : Vertex, weight : number ) {
        this.edges.push(new Edge(destination, weight));
    }
}