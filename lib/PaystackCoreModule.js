"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PaystackCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const providers_1 = require("./providers");
const util_1 = require("./util");
let PaystackCoreModule = PaystackCoreModule_1 = class PaystackCoreModule {
    static forRoot(options) {
        const provider = providers_1.createPaystackProvider(options);
        return {
            exports: [provider],
            module: PaystackCoreModule_1,
            providers: [provider],
        };
    }
    static forRootAsync(options) {
        const paystackProvider = {
            inject: [constants_1.paystackModuleOptions],
            provide: constants_1.paystackToken,
            useFactory: (paystackOptions) => util_1.getPaystackClient(paystackOptions),
        };
        return {
            exports: [paystackProvider],
            imports: options.imports,
            module: PaystackCoreModule_1,
            providers: [...this.createAsyncProviders(options), paystackProvider],
        };
    }
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                inject: options.inject || [],
                provide: constants_1.paystackModuleOptions,
                useFactory: options.useFactory,
            };
        }
        return {
            inject: [options.useExisting || options.useClass],
            provide: constants_1.paystackModuleOptions,
            useFactory: (optionsFactory) => optionsFactory.createPaystackOptions(),
        };
    }
};
PaystackCoreModule = PaystackCoreModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], PaystackCoreModule);
exports.PaystackCoreModule = PaystackCoreModule;
//# sourceMappingURL=PaystackCoreModule.js.map