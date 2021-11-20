// import {<nombre>} from "<ruta_relativa> ./<nombre>"
import { Vertex } from "./Vertex";
import { Dijkstra_Vector } from './Dijkstra_Vector';
import { Dijkstra_Element } from './Dijkstra_Element';

export class Graph {
    //<modificador> <nombre_propiedad> : <tipo>
    public vertexes : Vertex[];
    public vector : Dijkstra_Vector | null;
    //constructor (args : <tipo> c/u) {}
    constructor (vertexes : Vertex[]){
        //Estaciones
        //Conexiones
        
        this.vertexes = vertexes;
        this.vector = null
    }
    //<modificador> método (args : <tipo> c/u) : <tipo> {}
    public dijkstra(initial_vertex : Vertex) : void {
        var zero : number = 0.0;
        var infinite : number = 1/zero;
        
        this.vector = new Dijkstra_Vector(this, initial_vertex, infinite);
        
        while (!this.solution()) {
            var curret = this.selection();
            this.vector.actualice( curret, this.vertexes );
        }
        
    }
    
    private solution() : boolean {

        this.vector?.elements.forEach( dij_elem => {
            if(!dij_elem.definitive)
                return false;
        })

        return true;
    }

    private selection() : Dijkstra_Element {
        var selected = this.vector?.elements[0];

        this.vector?.elements.forEach( dij_elem => {
            if (!dij_elem.definitive)
                selected = dij_elem;
        })

        this.vector?.elements.forEach( dij_elem => {
            //@ts-ignore
            if (!dij_elem.definitive && dij_elem.weight < selected.weight)
            selected = dij_elem;
            
            //@ts-ignore
            selected.definitive = true;
            
            return selected;
        })
        
        //@ts-ignore
        return selected;
    }
}

