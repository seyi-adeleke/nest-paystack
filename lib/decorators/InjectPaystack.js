"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const constants_1 = require("./../constants");
function InjectPaystack() {
    return common_1.Inject(constants_1.paystackToken);
}
exports.InjectPaystack = InjectPaystack;
//# sourceMappingURL=InjectPaystack.js.map