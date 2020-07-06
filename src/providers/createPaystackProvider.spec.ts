import * as paystack from 'paystack';

import { paystackToken } from '../constants';
import { createPaystackProvider } from './createPaystackProvider';

describe('paystackProvider', () => {
  const apiKey = 'test';

  describe('when called', () => {
    it('should use the correct token', () => {
      const provider = createPaystackProvider({ apiKey });
      expect(provider).toHaveProperty('provide', paystackToken);
    });

    it('should provide a paystack client', () => {
      const provider = createPaystackProvider({ apiKey });
      expect(provider).toHaveProperty('useValue');
      expect((provider as any).useValue).toBeInstanceOf(paystack);
    });
  });
});
