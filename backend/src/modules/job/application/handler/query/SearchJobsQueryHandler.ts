import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Job } from 'src/modules/job/domain/model/job/Job';
import { Jobs } from 'src/modules/job/domain/model/job/Jobs';
import { SearchJobsQuery } from 'src/modules/job/domain/model/job/query/SearchJobsQuery';

@QueryHandler(SearchJobsQuery)
export class SearchJobsQueryHandler implements IQueryHandler<SearchJobsQuery> {
  constructor(@Inject(Jobs) private readonly repository: Jobs) {}

  execute(query: SearchJobsQuery): Promise<Job[]> {
    return this.repository.search(query);
  }
}
