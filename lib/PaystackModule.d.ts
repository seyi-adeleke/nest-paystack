import { DynamicModule } from '@nestjs/common';
import { PaystackAsyncOptions, PaystackOptions } from './interfaces';
export declare class PaystackModule {
    static forRoot(options: PaystackOptions): DynamicModule;
    static forRootAsync(options: PaystackAsyncOptions): DynamicModule;
}
