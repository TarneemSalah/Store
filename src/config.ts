import dotenv from 'dotenv';
import { PropertyAccessChain } from 'typescript';
import { Pool } from 'pg'
dotenv.config();

console.log(process.env);

const {
PORT,
NODE_ENV,
POSTGRES_HOST,
POSTGRES_PORT,
POSTGRES_DB,
POSTGRES_DB_TEST,
POSTGRES_USER,
POSTGRES_PASSWORD,
}=process.env;

export default {
    port :PORT,
    host :POSTGRES_HOST,
    dbPort : POSTGRES_PORT,
    database: NODE_ENV === 'dev' ? POSTGRES_DB : POSTGRES_DB_TEST,
    user: POSTGRES_USER,
    password :  POSTGRES_PASSWORD,
};