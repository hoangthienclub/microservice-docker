"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crypto = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const crypto = (message, key) => {
    const encryptedKey = crypto_js_1.default.HmacSHA1(message, key);
    return crypto_js_1.default.enc.Base64.stringify(encryptedKey);
};
exports.crypto = crypto;
