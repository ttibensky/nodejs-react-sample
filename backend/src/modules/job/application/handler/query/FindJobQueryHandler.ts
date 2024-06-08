import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Maybe } from 'purify-ts';
import { Job } from 'src/modules/job/domain/model/job/Job';
import { Jobs } from 'src/modules/job/domain/model/job/Jobs';
import { FindJobQuery } from 'src/modules/job/domain/model/job/query/FindJobQuery';

@QueryHandler(FindJobQuery)
export class FindJobQueryHandler implements IQueryHandler<FindJobQuery> {
  constructor(@Inject(Jobs) private readonly repository: Jobs) {}

  execute(query: FindJobQuery): Promise<Maybe<Job>> {
    return this.repository.find(query.jobId);
  }
}
