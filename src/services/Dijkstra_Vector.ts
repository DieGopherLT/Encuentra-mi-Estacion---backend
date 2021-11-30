import { Dijkstra_Element } from "./Dijkstra_Element"
import { Vertex } from './Vertex';
import { Graph } from "./Graph";

export class Dijkstra_Vector {
    public elements : Dijkstra_Element[];
    public initial_element : Dijkstra_Element | null = null;
    
    constructor( graph : Graph, initial_vertex : Vertex, infinite : number ) {
        this.elements =  []
        graph.vertexes.forEach(vertex => {
            var dij_elem = new Dijkstra_Element(vertex, infinite);
            if (vertex.id == initial_vertex.id) {
                dij_elem.coming = dij_elem;
                dij_elem.weight = 0;
                this.initial_element = dij_elem;
            }
            this.elements.push(dij_elem);
        });
    }

    public actualice ( definitive_element : Dijkstra_Element, vertexes : Vertex[] ) : void {
        
        definitive_element.vertex.edges.forEach(edge => {

            this.elements.forEach(dij_elem => {
                if (edge.destination.id == dij_elem.vertex.id) {

                    if (!dij_elem.definitive && (definitive_element.weight + edge.wegiht) < dij_elem.weight) {
                        
                        dij_elem.weight = definitive_element.weight + edge.wegiht;
                        dij_elem.coming = definitive_element;
                    }
                }
            })
            
        });
    }
}