import { Jobs } from 'src/modules/job/domain/model/job/Jobs';
import { JobId } from 'src/modules/job/domain/model/job/value-objects/JobId';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from 'src/modules/job/domain/model/job/Job';
import { Either, Maybe, MaybeAsync } from 'purify-ts';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongooseJobs implements Jobs {
  constructor(@InjectModel(Job.name) private model: Model<Job>) {}

  async get(id: JobId): Promise<Either<Error, Job>> {
    return (await this.find(id)).toEither(
      new Error(`Job not found for ID ${id.toString()}`),
    );
  }

  async find(id: JobId): Promise<Maybe<Job>> {
    return MaybeAsync.call(this.model.findById(id).exec());
  }

  async save(job: Job): Promise<void> {
    const createdCat = new this.model(job);

    await createdCat.save();
  }
}
