import { Vertex } from './Vertex';

export class Dijkstra_Element {
    public vertex : Vertex;
    public weight : number;
    public definitive : boolean;
    public coming : Dijkstra_Element | null;

    constructor( vertex : Vertex, weight : number) {
        this.vertex = vertex;
        this.weight = weight;
        this.definitive = false;
        this.coming = null;
    }
}