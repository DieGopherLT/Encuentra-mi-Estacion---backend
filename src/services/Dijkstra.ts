import { Graph } from "./Graph";
import { Vertex } from "./Vertex";
import { Dijkstra_Vector } from "./Dijkstra_Vector";
import { Dijkstra_Element } from './Dijkstra_Element';
import { inspect } from "util";

export function dijkstra(graph : Graph, origin_vertex : Vertex, destination_vertex : Vertex) : Vertex[] {
    //console.log(JSON.stringify(graph, null, 4));
    var zero : number = 0.0;
    var infinite : number = 1/zero;
    
    graph.vector = new Dijkstra_Vector(graph, origin_vertex, infinite);
    
    while (!solution(graph)) {
        var current = selection(graph);
        graph.vector.actualice( current, graph.vertexes );
    }
    
    let path = new Array<Vertex>();
    graph.vector.elements.forEach(dij_elem => {
        if (dij_elem.vertex.id == destination_vertex.id) {
            path.push(destination_vertex);
            let current = dij_elem;
            do {
                //@ts-ignore
                current = current.coming;
                path.push(current.vertex)
            } while (current.vertex.id != graph.vector?.initial_element?.vertex.id)
        }
    });

    return path.reverse();
}

function solution(graph : Graph) : boolean {
    //@ts-ignore
    for(let index = 0; index < graph.vector.elements.length; ++index) {
        if(!graph.vector?.elements[index].definitive)
            return false;
    }
    
    return true;
}

function selection(graph : Graph) : Dijkstra_Element {
    var selected = graph.vector?.elements[0];

    graph.vector?.elements.forEach( dij_elem => {
        if (!dij_elem.definitive)
            selected = dij_elem;
    })

    graph.vector?.elements.forEach( dij_elem => {
        //@ts-ignore
        if (!dij_elem.definitive && dij_elem.weight < selected.weight)
            selected = dij_elem;
    })
    
    //@ts-ignore
    selected.definitive = true;
    //@ts-ignore  
    return selected;
}