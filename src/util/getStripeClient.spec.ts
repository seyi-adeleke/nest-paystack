import * as paystack from 'paystack';
import { getPaystackClient } from './getPaystackClient';

describe('getPaystackClient', () => {
  const apiKey = 'test';

  it('should return the paystack client', () => {
    const paystackClient = getPaystackClient({ apiKey });
    expect(paystackClient).toBeInstanceOf(paystack);
  });

  it('should return the paystack client with custom options', () => {
    const paystackClient = getPaystackClient({ apiKey });

    expect(paystackClient).toBeInstanceOf(paystack);
  });
});
