import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || '',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'db_personas',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,  // Máximo de conexiones
    queueLimit: 0         // Sin límite para solicitudes en espera
  });
  
  export default pool;
  



