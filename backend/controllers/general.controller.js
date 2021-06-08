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
exports.general = void 0;
const database_1 = require("../database");
function general(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.Connect();
        try {
            const [lgemployees, fields] = yield conn.query('SELECT * FROM lgemployees;');
            const [puertas, fields2] = yield conn.query('SELECT puertas.id idPuerta, idMdc, idTipoPuerta, puertas.descripcion puertasDescripcion, mdcs.descripcion mdcDescripcion, codigo as codigoMdc, mdcs.idTipoMdc idTipoMdc, (SELECT idServer FROM mdc_antipassbacks WHERE mdc_antipassbacks.idClient = idMdc) idServer FROM axesindustrial.puertas inner JOIN mdcs WHERE idMdc = mdcs.id;');
            const [lgdoorfilter, fields3] = yield conn.query('SELECT * FROM lgdoorfilter;');
            const [operator, fields4] = yield conn.query('SELECT * FROM lgoperatorfilter;');
            return res.json({
                error: false,
                data: {
                    lgemployees,
                    puertas,
                    lgdoorfilter,
                    operator
                }
            });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }
        finally {
            conn.end();
        }
    });
}
exports.general = general;
