"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const util_1 = require("../util");
function createPaystackProvider(options) {
    return {
        provide: constants_1.paystackToken,
        useValue: util_1.getPaystackClient(options),
    };
}
exports.createPaystackProvider = createPaystackProvider;
//# sourceMappingURL=createPaystackProvider.js.map