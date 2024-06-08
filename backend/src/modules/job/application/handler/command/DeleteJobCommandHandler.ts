import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteJobCommand } from 'src/modules/job/domain/model/job/command/DeleteJobCommand';

@CommandHandler(DeleteJobCommand)
export class DeleteJobCommandHandler
  implements ICommandHandler<DeleteJobCommand>
{
  async execute(command: DeleteJobCommand) {
    console.log(command);
  }
}
