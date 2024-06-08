import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateJobCommand } from 'src/modules/job/domain/model/job/command/UpdateJobCommand';

@CommandHandler(UpdateJobCommand)
export class UpdateJobCommandHandler
  implements ICommandHandler<UpdateJobCommand>
{
  async execute(command: UpdateJobCommand) {
    console.log(command);
  }
}
