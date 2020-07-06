import { Provider } from '@nestjs/common';
import * as paystack from 'paystack';
import { PaystackOptions } from '../interfaces';
export declare function createPaystackProvider(options: PaystackOptions): Provider<paystack>;
