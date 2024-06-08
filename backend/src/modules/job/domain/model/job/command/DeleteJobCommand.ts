import { JobId } from '../value-objects/JobId';
import { BaseCommand } from 'src/lib/common/domain/model/command/BaseCommand';

export class DeleteJobCommand extends BaseCommand {
  id: JobId;

  constructor(id: JobId) {
    super();
    this.id = id;
  }
}
