import { Module } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as paystack from 'paystack';
import { paystackToken } from './constants';
import { PaystackOptions, PaystackOptionsFactory } from './interfaces';
import { PaystackModule } from './PaystackModule';

describe('PaystackModule', () => {
  const apiKey = 'test';

  class TestService implements PaystackOptionsFactory {
    createPaystackOptions(): PaystackOptions {
      return {
        apiKey,
      };
    }
  }

  @Module({
    exports: [TestService],
    providers: [TestService],
  })
  class TestModule {}

  describe('forRoot', () => {
    it('should provide the paystack client', async () => {
      const module = await Test.createTestingModule({
        imports: [PaystackModule.forRoot({ apiKey })],
      }).compile();

      const paystackClient = module.get<paystack>(paystackToken);
      expect(paystackClient).toBeDefined();
      expect(paystackClient).toBeInstanceOf(paystack);
    });
  });

  describe('forRootAsync', () => {
    describe('when the `useFactory` option is used', () => {
      it('should provide the paystack client', async () => {
        const module = await Test.createTestingModule({
          imports: [
            PaystackModule.forRootAsync({
              useFactory: () => ({ apiKey }),
            }),
          ],
        }).compile();

        const paystackClient = module.get<paystack>(paystackToken);
        expect(paystackClient).toBeDefined();
        expect(paystackClient).toBeInstanceOf(paystack);
      });
    });

    describe('when the `useExisting` option is used', () => {
      it('should provide the paystack client', async () => {
        const module = await Test.createTestingModule({
          imports: [
            PaystackModule.forRootAsync({
              imports: [TestModule],
              useExisting: TestService,
            }),
          ],
        }).compile();

        const paystackClient = module.get<paystack>(paystackToken);
        expect(paystackClient).toBeDefined();
        expect(paystackClient).toBeInstanceOf(paystack);
      });
    });

    xdescribe('when the `useClass` option is used', () => {
      it('should provide the paystack client', async () => {
        const module = await Test.createTestingModule({
          imports: [
            PaystackModule.forRootAsync({
              useClass: TestService,
            }),
          ],
        }).compile();

        const paystackClient = module.get<paystack>(paystackToken);
        expect(paystackClient).toBeDefined();
        expect(paystackClient).toBeInstanceOf(paystack);
      });
    });
  });
});
