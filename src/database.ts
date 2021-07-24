import mysql from 'mysql2/promise';
import keys from './keys';

/**
 * conneting a the database taks whit mysql2/promise 
 * */
export const pool =  async() =>{
    return await mysql.createConnection(keys.database);
}
