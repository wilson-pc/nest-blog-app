"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.relationResolvers = exports.crudResolvers = void 0;
const crudResolversImport = require("./resolvers/crud/resolvers-crud.index");
const relationResolversImport = require("./resolvers/relations/resolvers.index");
__exportStar(require("./enums"), exports);
__exportStar(require("./models"), exports);
__exportStar(require("./resolvers/crud"), exports);
__exportStar(require("./resolvers/relations"), exports);
__exportStar(require("./resolvers/inputs"), exports);
__exportStar(require("./resolvers/outputs"), exports);
__exportStar(require("./enhance"), exports);
__exportStar(require("./scalars"), exports);
exports.crudResolvers = Object.values(crudResolversImport);
exports.relationResolvers = Object.values(relationResolversImport);
exports.resolvers = [...exports.crudResolvers, ...exports.relationResolvers];
//# sourceMappingURL=index.js.map