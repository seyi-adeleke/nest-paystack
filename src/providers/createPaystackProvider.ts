import { Provider } from '@nestjs/common';
import * as paystack from 'paystack';

import { paystackToken } from '../constants';
import { PaystackOptions } from '../interfaces';
import { getPaystackClient } from '../util';

export function createPaystackProvider(
  options: PaystackOptions,
): Provider<paystack> {
  return {
    provide: paystackToken,
    useValue: getPaystackClient(options),
  };
}
