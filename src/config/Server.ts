import express, { Application } from 'express';
import cors from 'cors';

import StationRouter from '../routes/station.route';

import { connectDB } from './db';

//* Clase para configurar el servidor
export class Server {

    private readonly app: Application

    constructor() {
        //* Crear el servidor
        this.app = express();

        connectDB();
        this.middleware();
        this.routes();
    }

    //* Registrar rutas en el servidor
    private routes() {
        this.app.use('/station', StationRouter);
    }

    private middleware() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(cors());
    }

    start() {
        const PORT = 4000;
        this.app.listen(PORT, function() {
            console.log('Server working on port: ' + PORT); 
        });
    }
}
