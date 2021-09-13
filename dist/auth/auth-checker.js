"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authChecker = void 0;
const _context_1 = require("../ context");
const jsonwebtoken_1 = require("jsonwebtoken");
const payload_1 = require("../payload");
const authChecker = ({ context: { req, prisma }, }) => {
    const Authorization = req.headers.authorization;
    if (Authorization) {
        try {
            const token = Authorization.replace('Bearer ', '');
            const verifiedToken = (0, jsonwebtoken_1.verify)(token, 'secrect');
            req.user = verifiedToken;
            return true;
        }
        catch (_a) {
            throw false;
        }
    }
    return false;
};
exports.authChecker = authChecker;
//# sourceMappingURL=auth-checker.js.map