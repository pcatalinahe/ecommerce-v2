import mysql from 'mysql2/promise';
import pool from './connectionPool.js';
import dotenv from 'dotenv';
dotenv.config();

async function getProducts() {
    const connection = await pool.getConnection();
    try{
    const [rows] = await connection.query('SELECT * FROM ProductsDB.Products');
    // connection.release();
    return rows;
    } catch (e) {
        console.log(e);
        throw e;
    } finally {
        connection.release();
    }
}

const data = await getProducts();
console.log(data);

export default getProducts;