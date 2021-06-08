"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const root_route_1 = __importDefault(require("./routes/root.route"));
const filterEmployees_route_1 = __importDefault(require("./routes/filterEmployees.route"));
const general_route_1 = __importDefault(require("./routes/general.route"));
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.server = http_1.default.createServer(this.app);
        this.settings();
        this.middlewares();
        this.routes();
        this.webSocketsServer();
    }
    settings() {
        this.app.set('port', process.env.PORT || 3001);
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true })); //Esta linea se utiliza cuando enviamos datos del formulario
    }
    routes() {
        this.app.use("", root_route_1.default);
        this.app.use('/api/v1/filterEmployees', filterEmployees_route_1.default);
        this.app.use('/api/v1/general', general_route_1.default);
    }
    webSocketsServer() {
        this.io = require('socket.io')(this.server, {
            cors: {
                origins: ['http://localhost:4200', 'http://localhost']
            }
        });
        this.io.on('connection', (socket) => {
            console.log('socket.io: user connected ', socket.id);
            socket.broadcast.emit('deviceOnline');
            socket.on('disconnect', () => {
                console.log('socket:io: user disconnected ' + socket.id);
                socket.broadcast.emit('isOffline', { socketId: socket.id });
            });
            socket.on('statusGpio', (gpio) => {
                console.log('statusGpio', gpio);
                socket.broadcast.emit('statusGpio', gpio);
            });
            socket.on('registros', (registro) => {
                console.log('registro socketIO', registro);
                socket.broadcast.emit('nuevoRegistro', registro);
            });
            socket.on('requestAperturaManual', (puerta) => {
                console.log('requestAperturaManual =>', puerta);
                socket.broadcast.emit('aperturaManual', puerta);
            });
            socket.on('aperturaManual', (puerta) => {
                console.log('requestAperturaManual =>', puerta);
                // socket.broadcast.emit('aperturaManual', puerta);
            });
            socket.on('whatDoorsIsOnline', (msg) => {
                console.log('whatDoorsIsOnline');
                socket.broadcast.emit('whatDoorsIsOnline');
            });
            socket.on('doorsOnline', (puertas) => {
                console.log('DoorsOnline', puertas);
                socket.broadcast.emit('doorsOnline', puertas);
            });
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.server.listen(this.app.get('port'));
            console.log('Server on Port', this.app.get('port'));
        });
    }
}
exports.App = App;
