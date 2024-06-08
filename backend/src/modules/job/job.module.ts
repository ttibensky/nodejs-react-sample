import { Module } from '@nestjs/common';
import { JobsController } from './infrastructure/delivery/http/jobs.controller';

@Module({
  controllers: [JobsController],
})
export class JobModule {}
