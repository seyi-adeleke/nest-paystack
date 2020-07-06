import { Inject } from '@nestjs/common';
import { paystackToken } from './../constants';

export function InjectPaystack() {
  return Inject(paystackToken);
}
