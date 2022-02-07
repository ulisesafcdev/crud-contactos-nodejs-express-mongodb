const controller = { };
const connection = require('../connection/connection');
const usuariosModel = require('../models/contactos.model');

/* 
    OPERACIONES BASICAS DE UN CRUD
    -> CREATE
    -> READ
    -> UPDATE
    -> DELETE

    */
const createUsuario = (nombre, apellidos, edad, pais) => {
    const persona = new usuariosModel({
        nombre: nombre,
        apellidos: apellidos,
        edad: edad,
        pais: pais
        
    })

    return persona;
    
}

const editUsuario = (id, nombre, apellidos, edad, pais) => {

    const persona = {
        nombre,
        apellidos,
        edad,
        pais
    }

    return usuariosModel.updateOne({_id:id}, {
        $set:{
            nombre: persona.nombre,
            apellidos: persona.apellidos,
            edad: persona.edad,
            pais: persona.pais
        }
    })

}

const deleteUsuarios = (id) => {

    return usuariosModel.deleteOne({_id:id});

}

/* ****************************************************************************************** */

controller.index = async (req, res) => {

    try {
        const info = `Aplicacion node, express, mongodb para fines didacticos`;
        
        await connection();
        console.log('Conectado a la base de datos');
        
        const allDataUsuarios = await usuariosModel.find();

        res.render('index', {
            info,
            allDataUsuarios
        });

    } catch (error) {
        console.log(error);
    }
}

module.exports = controller;