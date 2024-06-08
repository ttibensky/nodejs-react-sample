import { Module } from '@nestjs/common';
import { JobsController } from './delivery/http/JobsController';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateJobCommandHandler } from '../application/handler/command/CreateJobCommandHandler';
import { UpdateJobCommandHandler } from '../application/handler/command/UpdateJobCommandHandler';
import { DeleteJobCommandHandler } from '../application/handler/command/DeleteJobCommandHandler';
import { Jobs } from '../domain/model/job/Jobs';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseJobs } from './domain/model/job/MongooseJobs';
import { JobSchema } from './persistence/mongoose/schema/job.schema';
import { Job } from '../domain/model/job/Job';
import { SearchJobsQueryHandler } from '../application/handler/query/SearchJobsQueryHandler';
import { FindJobQueryHandler } from '../application/handler/query/FindJobQueryHandler';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }]),
  ],
  controllers: [JobsController],
  providers: [
    ...[
      CreateJobCommandHandler,
      UpdateJobCommandHandler,
      DeleteJobCommandHandler,
    ],
    ...[SearchJobsQueryHandler, FindJobQueryHandler],
    ...[
      {
        provide: Jobs,
        useClass: MongooseJobs,
      },
    ],
  ],
})
export class JobModule {}
