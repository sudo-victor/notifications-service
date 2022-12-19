import { OnModuleDestroy } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['thankful-adder-9260-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dGhhbmtmdWwtYWRkZXItOTI2MCTTEUxR_UwEocb2nrTAuAntCKRGYLSj5MWfTMQ',
          password:
            'ciDLMsueEwutJkUWWdBA_LawZuQbWyfnFPW0A7TMQ1Ha8FTf5Cy6ahjF7akmZx63KiuloQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
