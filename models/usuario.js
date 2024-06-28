

const { Schema, model } = require('mongoose')
const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: [true,'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        require: true,
        emun:['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },

})




module.exports = model('Usuarios', UsuarioSchema )


// {
//     nombre: "jnefe",
//     correo: "enfjkfmef@gmail.com",
//     password: "wfekmkmew",
//         img: "d3mfk3232",
//         roll: "krmkree",
// estado: faslse,
// google: true 
// }