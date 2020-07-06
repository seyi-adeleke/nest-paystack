
## Table Of Contents
- [About](#about)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About
`nestjs-paystack` implements a `paystackModule`, which when imported into
your nest modules project provides a Paystack client to any class that injects it.

## Installation
```bash
npm install --save nestjs-paystack
```

## Getting Started

The simplest way to use `nestjs-paystack` is to import the `forRoot` function from `PaystackModule` into the module in which you want to inject the service.

```typescript
import { Module } from '@nestjs-common';
import { PaystackModule } from 'nestjs-paystack';

@Module({
  imports: [
    Paystackmodule.forRoot({
      apiKey: 'sk_xxxxxxxxx',
    }),
  ],
})
export class AppModule {}
```

You can then inject the Paystack client into your injectable classes by using a
custom  `InjectPaystack` decorator

```typescript
import { Injectable } from '@nestjs/common';
import { InjectPaystack } from 'nestjs-paystack';
import * as paystack from 'paystack';

@Injectable()
export class AppService {
  public constructor(
  @InjectPaystack() private readonly paystackClient: paystack) {}
}
```

You can also set it up Asynchronously.

```typescript
import { Module } from '@nestjs-common';
import { PaystackModule } from 'nestjs-paystack';
import { PaystackConfigService } from './PaystackConfigService';
import  { PaystackConfigModule } from './PaystackConfigModule';

@Module({
  imports: [
    PaystackConfigModule,
    PaystackModule.forRootAsync({
      inject: [PaystackConfigService],
      useFactory: (configService: PaystackConfigService) =>
        PaystackConfigService.getPaystackConfig(),
      }),
    }),
  ],
})
export class AppModule {}
```

```typescript
// PaystackConfigService.ts
import { Injectable } from '@nestjs/common';
import { PaystackOptions } from 'nestjs-paystack';

@Injectable()
export class ConfigService {
  public getPaystackConfig(): PaystackOptions {
    return {
      apiKey: 'sk_xxxxxxxxxxxxxx',
    };
  }
}
```

```typescript
// PaystackConfigModule.ts
import { Global, Module } from '@nestjs/common';
import { PaystackConfigService } from './PaystackConfigService';

@Global()
@Module({
  exports: [PaystackConfigService],
  providers: [PaystackConfigService],
})
export class PaystackConfigModule {}
```



## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [nestjs](https://nestjs.com)
- [paystack](https://github.com/kehers/paystack)
- Inspired by the [nest-stripe](https://github.com/dhaspden/nestjs-stripe) module by Dylan Aspden

Copyright &copy; 2020 Seyi Adeleke
