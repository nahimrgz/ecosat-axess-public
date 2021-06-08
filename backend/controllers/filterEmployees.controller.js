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
exports.deletePermiso = exports.insertarPermiso = exports.actualizarPermiso = exports.getAllFiltersEmployees = void 0;
const database_1 = require("../database");
function getAllFiltersEmployees(req, resp) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.Connect();
        try {
            const [rows, fields] = yield conn.query('select lgfe.id id, lgfe.jsonObject, lgfe.IdEmployee idEmpleado, lgfe.numAccesos, ldf.description tipoFiltro,  e.Name empleado,  lgfe.IdOperator operador,  p.descripcion puerta,  lgfe.Value1 value1, lgfe.Value2 value2, lgfe.TypeDate tipoDato,  m.codigo codigoMdc,  m.descripcion mdc from lgfilteremployee lgfe	left join puertas p on p.id = lgfe.IdDoor	left join lgemployees e on e.IdEmployees = lgfe.IdEmployee    left join mdcs m on m.id = p.idMdc    left join lgdoorfilter ldf on ldf.IdDoorFilter = lgfe.IdDoorFilter');
            return resp.json({
                error: false,
                data: rows
            });
        }
        catch (error) {
            console.error(error);
            return resp.status(500).json({
                error: true,
                message: error
            });
        }
        finally {
            conn.end();
        }
    });
}
exports.getAllFiltersEmployees = getAllFiltersEmployees;
function actualizarPermiso(req, resp) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.Connect();
        const body = req.body;
        delete body.idEmpleado;
        delete body.lgEmployeesId;
        delete body.operador;
        delete body.empleado;
        delete body.puerta;
        delete body.tipoFiltro;
        delete body.tipoDato;
        delete body.codigoMdc;
        delete body.mdc;
        body.estatusReplica = 2;
        console.log(body);
        try {
            yield conn.query('UPDATE lgfilteremployee SET ? WHERE id = ?;', [body, body.id]);
            yield conn.query('call SP_ACTIVIDADES(1,4,"")');
            return resp.json({
                error: false,
                message: 'Permiso actualizado correctamente'
            });
        }
        catch (error) {
            console.error(error);
            return resp.status(500).json({
                error: true,
                message: error
            });
        }
    });
}
exports.actualizarPermiso = actualizarPermiso;
function insertarPermiso(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const conn = yield database_1.Connect();
        delete body.idEmpleado;
        delete body.lgEmployeesId;
        delete body.operador;
        delete body.empleado;
        delete body.puerta;
        delete body.tipoFiltro;
        delete body.tipoDato;
        delete body.codigoMdc;
        delete body.mdc;
        body.estatusReplica = 1;
        try {
            const [rows, fields] = yield conn.query('INSERT INTO lgfilteremployee SET ?', [body]);
            const [rows2, field1] = yield conn.query('call SP_ACTIVIDADES(1,4,"")');
            return res.json({
                error: false,
                message: 'Permiso creado correctamente',
                dbResponse: rows
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
exports.insertarPermiso = insertarPermiso;
function deletePermiso(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const idPermiso = req.params.idPermiso;
        const conn = yield database_1.Connect();
        console.log('idPermiso', idPermiso);
        try {
            const [rows, fields] = yield conn.query('DELETE FROM lgfilteremployee WHERE id = ?', [idPermiso]);
            const [rows2, field1] = yield conn.query('call SP_ACTIVIDADES(1,4,"")');
            console.log('DeletePermiso ', rows);
            return res.json({
                error: false,
                message: 'Registro eliminado correctamente'
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
exports.deletePermiso = deletePermiso;
//
