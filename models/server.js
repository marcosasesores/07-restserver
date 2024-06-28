const express = require('express')
const cors = require('cors')
const { dbconnection } = require('../database/config')
class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usariosPath= '/api/usuarios'

        //conectar bbdd
        this.conectarDB();
        

        //moddleware -> funciones que añaden otra funcionalidad a nuetro restserver
        this.middleware();  
        //rutas de mi app
        this.routes();
        
    }
    
    async conectarDB() {
            await dbconnection();
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