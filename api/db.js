import mysql from 'mysql2';

export const db=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"2260122",
    database:'blog'
})