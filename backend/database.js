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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
const promise_1 = require("mysql2/promise");
function Connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield promise_1.createPool({
            host: '192.168.10.15',
            //socketPath: '/cloudsql/signage-283915:us-west4:signage-instance',
            user: 'Nahim_Ecosat',
            password: 'Ecosat.2019',
            database: 'axesindustrial',
            connectionLimit: 10,
            timezone: '-06:00',
            dateStrings: true
        });
        return connection;
    });
}
exports.Connect = Connect;
