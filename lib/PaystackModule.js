"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PaystackModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const PaystackCoreModule_1 = require("./PaystackCoreModule");
let PaystackModule = PaystackModule_1 = class PaystackModule {
    static forRoot(options) {
        return {
            module: PaystackModule_1,
            imports: [PaystackCoreModule_1.PaystackCoreModule.forRoot(options)],
        };
    }
    static forRootAsync(options) {
        return {
            module: PaystackModule_1,
            imports: [PaystackCoreModule_1.PaystackCoreModule.forRootAsync(options)],
        };
    }
};
PaystackModule = PaystackModule_1 = __decorate([
    common_1.Module({})
], PaystackModule);
exports.PaystackModule = PaystackModule;
//# sourceMappingURL=PaystackModule.js.map