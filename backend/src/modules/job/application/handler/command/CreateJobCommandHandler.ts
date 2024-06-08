import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateJobCommand } from 'src/modules/job/domain/model/job/command/CreateJobCommand';

@CommandHandler(CreateJobCommand)
export class CreateJobCommandHandler
  implements ICommandHandler<CreateJobCommand>
{
  async execute(command: CreateJobCommand) {
    console.log(command);
  }
}
