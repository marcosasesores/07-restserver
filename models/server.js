const express = require('express')
const cors = require('cors')
class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usariosPath= '/api/usuarios'

        //moddleware -> funciones que añaden otra funcionalidad a nuetro restserver
        this.middleware();  
        //rutas de mi app
        this.routes();
        
    }

    middleware() {
        this.app.use(cors());

        // Parseo y lectura del body 
        this.app.use(express.json())

        //directorio público
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use(this.usariosPath,require('../routes/usuarios'))

    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo puerto ', this.port);
        });
    }
    
    


}

module.exports = Server;