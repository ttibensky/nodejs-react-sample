import { BaseQuery } from 'src/lib/common/domain/model/query/BaseQuery';
import { JobId } from '../value-objects/JobId';

export class FindJobQuery extends BaseQuery {
  constructor(public readonly jobId: JobId) {
    super();
  }
}
