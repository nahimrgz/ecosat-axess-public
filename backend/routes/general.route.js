"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filterEmployees_controller_1 = require("../controllers/filterEmployees.controller");
const general_controller_1 = require("../controllers/general.controller");
const router = express_1.Router();
router.route('')
    .get(general_controller_1.general)
    .delete(filterEmployees_controller_1.deletePermiso);
exports.default = router;
