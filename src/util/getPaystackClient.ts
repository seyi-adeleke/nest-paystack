import * as paystack from 'paystack';
import { PaystackOptions } from '../interfaces';

export function getPaystackClient({ apiKey }: PaystackOptions): paystack {
  const paystackClient = new paystack(apiKey);

  return paystackClient;
}
