import { Either, Maybe } from 'purify-ts';
import { Job } from './Job';
import { JobId } from './value-objects/JobId';
import { SearchJobsQuery } from './query/SearchJobsQuery';

export interface Jobs {
  get(id: JobId): Promise<Either<Error, Job>>;
  find(id: JobId): Promise<Maybe<Job>>;
  search(query: SearchJobsQuery): Promise<Job[]>;
  create(job: Job): Promise<void>;
  update(job: Job): Promise<void>;
  delete(id: JobId): Promise<void>;
}

export const Jobs = Symbol('Jobs');
