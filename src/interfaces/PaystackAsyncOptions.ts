import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { PaystackOptions } from './PaystackOptions';
import { PaystackOptionsFactory } from './PaystackOptionsFactory';

export interface PaystackAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<PaystackOptionsFactory>;
  useExisting?: Type<PaystackOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<PaystackOptions> | PaystackOptions;
}
