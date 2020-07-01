"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = __importDefault(require("./inversify.config"));
var types_1 = require("./types");
var c = inversify_config_1.default.get(types_1.TYPES.IDepC);
c.doC();
