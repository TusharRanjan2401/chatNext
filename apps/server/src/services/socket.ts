import { Server } from 'socket.io'
import Redis from 'ioredis'
import prismaClient from './prisma';
import { produceMessage } from './kafka'

const pub = new Redis({
    host: '<your_host>',
    port: 6379, //your port
    username: '<your_username>',
    password:'<your_password>'
})
const sub = new Redis({
    host: '<your_host>',
    port: 6379, //your port
    username: '<your_username>',
    password:'<your_password>'
})

class SocketService{
    private _io: Server;
    constructor() {
        console.log('Init Socket server...')
        this._io = new Server({
            cors: {
                allowedHeaders: ["*"],
                origin: "*",
            }
        });
        sub.subscribe('MESSAGES');
    }

    public initListeners() {
        const io = this.io;
        console.log('Init socket listeners...')
        io.on('connect', (socket) => {
            console.log('New socket connected', socket.id)

            socket.on('event:message', async ({ message }: { message: string }) => {
                console.log('New message received ', message);
                await pub.publish('MESSAGES', JSON.stringify({message}))
            });

        });
        sub.on('message', async (channel, message) => {
            if (channel === 'MESSAGES') {
                console.log("new message from redis", message)
                io.emit('message', message);
                produceMessage(message);
                console.log('Message produced to kafka broker');
            }
        })
        
    }

    get io() {
        return this._io;
    }
}

export default SocketService;