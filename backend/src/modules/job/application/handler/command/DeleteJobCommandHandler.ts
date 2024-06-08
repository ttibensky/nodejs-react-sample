import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Jobs } from 'src/modules/job/domain/model/job/Jobs';
import { DeleteJobCommand } from 'src/modules/job/domain/model/job/command/DeleteJobCommand';

@CommandHandler(DeleteJobCommand)
export class DeleteJobCommandHandler
  implements ICommandHandler<DeleteJobCommand>
{
  constructor(@Inject(Jobs) private readonly jobs: Jobs) {}

  async execute(command: DeleteJobCommand): Promise<void> {
    await this.jobs.delete(command.id);
  }
}
