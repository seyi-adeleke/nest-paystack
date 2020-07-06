"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paystack = require("paystack");
function getPaystackClient({ apiKey }) {
    const paystackClient = new paystack(apiKey);
    return paystackClient;
}
exports.getPaystackClient = getPaystackClient;
//# sourceMappingURL=getPaystackClient.js.map