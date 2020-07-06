import { DynamicModule } from '@nestjs/common';
import { PaystackAsyncOptions, PaystackOptions } from './interfaces';
export declare class PaystackCoreModule {
    static forRoot(options: PaystackOptions): DynamicModule;
    static forRootAsync(options: PaystackAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
