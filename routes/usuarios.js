// rutas relacionadas a los usuarios

const { Router } = require('express');
const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPath
} = require('../controllers/usuarios')

const router = Router();

router.get('/', usuariosGet);


router.put('/:id', usuariosPut);


router.post('/', usuariosPost);


router.delete('/', usuariosDelete);


router.patch('/', usuariosPath);



module.exports = router;