const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuariosSchema = new Schema ({
    nombre: String,
    apellidos: String,
    edad: String,
    pais: String
})

const UsuariosModel = mongoose.model('usuarios', UsuariosSchema);

module.exports = UsuariosModel;