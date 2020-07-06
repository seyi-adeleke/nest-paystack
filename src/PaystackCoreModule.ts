import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { paystackModuleOptions, paystackToken } from './constants';
import {
  PaystackAsyncOptions,
  PaystackOptions,
  PaystackOptionsFactory,
} from './interfaces';
import { createPaystackProvider } from './providers';
import { getPaystackClient } from './util';

@Global()
@Module({})
export class PaystackCoreModule {
  public static forRoot(options: PaystackOptions): DynamicModule {
    const provider = createPaystackProvider(options);

    return {
      exports: [provider],
      module: PaystackCoreModule,
      providers: [provider],
    };
  }

  static forRootAsync(options: PaystackAsyncOptions): DynamicModule {
    const paystackProvider: Provider = {
      inject: [paystackModuleOptions],
      provide: paystackToken,
      useFactory: (paystackOptions: PaystackOptions) =>
        getPaystackClient(paystackOptions),
    };

    return {
      exports: [paystackProvider],
      imports: options.imports,
      module: PaystackCoreModule,
      providers: [...this.createAsyncProviders(options), paystackProvider],
    };
  }

  private static createAsyncProviders(
    options: PaystackAsyncOptions,
  ): Provider[] {
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

  private static createAsyncOptionsProvider(
    options: PaystackAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        inject: options.inject || [],
        provide: paystackModuleOptions,
        useFactory: options.useFactory,
      };
    }

    return {
      inject: [options.useExisting || options.useClass],
      provide: paystackModuleOptions,
      useFactory: (optionsFactory: PaystackOptionsFactory) =>
        optionsFactory.createPaystackOptions(),
    };
  }
}
