import { Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as paystack from 'paystack';

import { PaystackModule } from '../PaystackModule';
import { InjectPaystack } from './InjectPaystack';

describe('InjectPaystack', () => {
  const apiKey = 'test';
  let module: TestingModule;

  @Injectable()
  class TestService {
    public constructor(
      @InjectPaystack()
      public readonly paystackClient: paystack,
    ) {}
  }

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [PaystackModule.forRoot({ apiKey })],
      providers: [TestService],
    }).compile();
  });

  describe('when decorating a class constructor parameter', () => {
    it('should inject the paystack client', () => {
      const testService = module.get(TestService);
      expect(testService.paystackClient).toBeInstanceOf(paystack);
    });
  });
});
