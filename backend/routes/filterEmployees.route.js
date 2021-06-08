"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filterEmployees_controller_1 = require("../controllers/filterEmployees.controller");
const router = express_1.Router();
router.route('')
    .post(filterEmployees_controller_1.insertarPermiso)
    .put(filterEmployees_controller_1.actualizarPermiso);
router.route('/:idPermiso')
    .delete(filterEmployees_controller_1.deletePermiso);
router.route('/getAll')
    .get(filterEmployees_controller_1.getAllFiltersEmployees);
exports.default = router;
