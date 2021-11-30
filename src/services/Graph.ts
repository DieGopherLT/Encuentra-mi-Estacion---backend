// import {<nombre>} from "<ruta_relativa> ./<nombre>"
import { Vertex } from './Vertex';
import { Dijkstra_Vector } from './Dijkstra_Vector';
import { dijkstra } from './Dijkstra';
import { Connection } from '../types/connection';
import { inspect } from 'util';

export class Graph {
    //<modificador> <nombre_propiedad> : <tipo>
    public vertexes : Vertex[];
    public vector : Dijkstra_Vector | null;

    //constructor (args : <tipo> c/u) {}
    constructor (connections : Connection[]) {
        
        this.vertexes = new Array<Vertex>();
        connections.forEach(connection => {

            let originVertex = this.getVertex(connection.originId, connection.originName, 
                                              connection.originLatitude,connection.originLongitude);
            let destinyVertex = this.getVertex(connection.destinyId, connection.destinyName, 
                                               connection.destinyLatitude,connection.destinyLongitude);

            originVertex.addEdge(destinyVertex, connection.weight)
            destinyVertex.addEdge(originVertex, connection.weight)
            
        });
        
        this.vector = null
    }

    private addEdge(origin : Vertex, destination : Vertex, weight : number) 
    {
        this.vertexes.forEach(vertex => {
            if (vertex.id == origin.id)
                vertex.addEdge(destination, weight);
        });
    }

    private getVertex(id : number, name : string = '', latitude : string = '', longitude : string = '') : Vertex
    {
        for (let index = 0; index < this.vertexes.length; index++) {       
            if (id == this.vertexes[index].id)
                return this.vertexes[index];
        }        

        let vertex = this.addVertex(id, name, latitude, longitude);
        return vertex;
    }

    private addVertex(id : number, name : string, latitude : string, longitude : string) : Vertex
    {
        let newVertex = new Vertex(id, name, latitude, longitude);
        this.vertexes.push(newVertex)
        return newVertex;
    }

    //<modificador> método (args : <tipo> c/u) : <tipo> {}
    dijkstra(origin_id : number, desination_id : number) : any[]
    {
        let origin_vertex  = this.getVertex(origin_id);
        let destination_vertex = this.getVertex(desination_id);
        let path = new Array<any>();
        let vertex_path = dijkstra(this, origin_vertex, destination_vertex);
        
        vertex_path.forEach(vertex => {
            path.push({
                "id" : vertex.id,
                "name" : vertex.name,
                "latitude" : vertex.latitude, 
                "longitude" : vertex.longitude 
            })
        });

        return path;
    }
}

