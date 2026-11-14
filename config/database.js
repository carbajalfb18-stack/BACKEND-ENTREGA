import Sequelize from "sequelize";
import pg from "pg";

const hostname = `localhost`; //127.0.0.1
const username = `postgres`;
const pasword = `pg4dm1n$`;
const database = `Tienda`;
const port = 5432;
const dialect = `postgres`;


const sequelize = new Sequelize(database, username, pasword,{
    hostname: hostname,
    port,
    dialect,
    dialectModule: pg
});


export default sequelize;