import { Module } from '@nestjs/common';
import { JobsController } from './delivery/http/JobsController';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateJobCommandHandler } from '../application/handler/command/CreateJobCommandHandler';
import { UpdateJobCommandHandler } from '../application/handler/command/UpdateJobCommandHandler';
import { DeleteJobCommandHandler } from '../application/handler/command/DeleteJobCommandHandler';

@Module({
  imports: [CqrsModule],
  controllers: [JobsController],
  providers: [
    CreateJobCommandHandler,
    UpdateJobCommandHandler,
    DeleteJobCommandHandler,
  ],
})
export class JobModule {}
