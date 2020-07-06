import { PaystackOptions } from './PaystackOptions';
export interface PaystackOptionsFactory {
    createPaystackOptions(): Promise<PaystackOptions> | PaystackOptions;
}
