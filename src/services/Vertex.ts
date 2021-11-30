import { Edge } from "./Edge";

export class Vertex {
    public id : number;
    public name : string;
    public latitude : string;
    public longitude : string;
    public edges :Edge[];

    constructor ( id        : number = 0,
                  name      : string = '',
                  latitude  : string = '',
                  longitude : string = '')  {
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.edges = [];
    }

    addEdge( destination : Vertex, weight : number ) {
        this.edges.push(new Edge(destination, weight));
    }
}