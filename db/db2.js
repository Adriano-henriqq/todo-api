import mysql from 'mysql2';
import dotEnv from 'dotenv'

dotEnv.config()

export const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password:process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT_DB
})