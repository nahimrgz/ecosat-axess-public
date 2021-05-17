"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const root_controller_1 = require("../controllers/root.controller");
const router = express_1.Router();
router.route('/')
    .get(root_controller_1.getInfo);
exports.default = router;
