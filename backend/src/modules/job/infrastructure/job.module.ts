import { Module } from '@nestjs/common';
import { JobsController } from './delivery/http/jobs.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateJobCommandHandler } from '../application/handler/command/CreateJobCommandHandler';

@Module({
  imports: [CqrsModule],
  controllers: [JobsController],
  providers: [CreateJobCommandHandler],
})
export class JobModule {}
