import RepositoryBase from "./RepositoryBase";
import sequelize from "../config/database";
import {marcas , modelos} from "../models";

const repository = new RepositoryBase(Orden);

// no uso include porque slo hay 1 base

repository.findAll = async () => {
    try {
        return await marcas.findAll({
            order: ['id']
        })
    } catch (err) {
        console.log(err);
        return null;        
    }
}

repository.create = async ({ nombre, pais }) => {
    try {
        return await marcas.create({ 
            nombre, pais
         });
         
    } catch (err) {
        console.log(err);
        return null;
    }
}

export default repository;