
class Sockets {
    constructor(io){
        this.io = io;
        this.socketEvents();
    }
    socketEvents(){        
        //? config socket server 
        this.io.on('connection', (socket)=>{ 
            //? escuchar evento
            socket.on('mensaje', (data)=>{
                //? io emitir mensaje a todos los clientes
                //? socket emitir mensaje a un cliente en especifico
                socket.emit('enviarMensaje', data);
            })
        })
    }
}

module.exports = Sockets;