import { Jobs } from 'src/modules/job/domain/model/job/Jobs';
import { JobId } from 'src/modules/job/domain/model/job/value-objects/JobId';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from 'src/modules/job/domain/model/job/Job';
import { Either, Maybe } from 'purify-ts';
import { Injectable } from '@nestjs/common';
import { SearchJobsQuery } from 'src/modules/job/domain/model/job/query/SearchJobsQuery';

@Injectable()
export class MongooseJobs implements Jobs {
  constructor(@InjectModel(Job.name) private model: Model<Job>) {}

  async get(id: JobId): Promise<Either<Error, Job>> {
    return (await this.find(id)).toEither(
      new Error(`Job not found for ID ${id.toString()}`),
    );
  }

  async find(id: JobId): Promise<Maybe<Job>> {
    return Maybe.fromNullable(
      await this.model.findById(id.toString()).exec(),
    ).map(
      (job) =>
        new Job(
          job.id,
          job.customerName,
          job.type,
          job.status,
          job.appointmentDate,
          job.technician,
        ),
    );
  }

  async search(query: SearchJobsQuery): Promise<Job[]> {
    // @TODO add search criteria
    return (await this.model.find().exec()).map(
      (job) =>
        new Job(
          job.id,
          job.customerName,
          job.type,
          job.status,
          job.appointmentDate,
          job.technician,
        ),
    ) as Job[];
  }

  async create(job: Job): Promise<void> {
    const createdCat = new this.model(job);

    await createdCat.save();
  }

  async update(job: Job): Promise<void> {
    await this.model
      .findByIdAndUpdate(job.id.toString(), new this.model(job))
      .exec();
  }

  async delete(id: JobId): Promise<void> {
    await this.model.findByIdAndDelete(id.toString()).exec();
  }
}
