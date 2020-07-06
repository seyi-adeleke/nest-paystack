import * as paystack from 'paystack';
import { PaystackOptions } from '../interfaces';
export declare function getPaystackClient({ apiKey }: PaystackOptions): paystack;
