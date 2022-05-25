const express = require('express');
const http    = require('http');
const socket  = require('socket.io');
const path    = require('path');
const Sockets = require('./sockets');

class Server {
    constructor(){
        this.app = express();
        this.puerto = process.env.PORT || 8080;
        this.httpServer = http.createServer(this.app);
        this.io = socket(this.httpServer, { /* options */ });
        // this.escucharSockets();
    }
    
    middlewares(){
        //? desplegar directorio publico
        this.app.use(express.static(path.resolve( __dirname, '../public')));
    }
    execute(){
        this.middlewares();
        this.configSocket();
        this.httpServer.listen(this.puerto, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.puerto}`);
        });
    }
    configSocket(){
        new Sockets(this.io);
    }

}

module.exports = Server;