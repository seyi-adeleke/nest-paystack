import { DynamicModule, Module } from '@nestjs/common';
import { PaystackAsyncOptions, PaystackOptions } from './interfaces';
import { PaystackCoreModule } from './PaystackCoreModule';

@Module({})
export class PaystackModule {
  public static forRoot(options: PaystackOptions): DynamicModule {
    return {
      module: PaystackModule,
      imports: [PaystackCoreModule.forRoot(options)],
    };
  }

  public static forRootAsync(options: PaystackAsyncOptions): DynamicModule {
    return {
      module: PaystackModule,
      imports: [PaystackCoreModule.forRootAsync(options)],
    };
  }
}
