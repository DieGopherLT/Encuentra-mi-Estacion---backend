import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import path from 'path';

//* Indicar de que archivo agarrar las variables de entorno
dotenv.config({ path: '.env' });

export async function connectDB() {
    try {
        await createConnection({
            type: 'mysql',
            port: Number(process.env.DB_PORT),
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            synchronize: true,
            entities: [path.join(__dirname, '../models/*.ts')]
        });
        console.log('Database connected!');
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}