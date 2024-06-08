import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Job } from 'src/modules/job/domain/model/job/Job';
import { Jobs } from 'src/modules/job/domain/model/job/Jobs';
import { CreateJobCommand } from 'src/modules/job/domain/model/job/command/CreateJobCommand';

@CommandHandler(CreateJobCommand)
export class CreateJobCommandHandler
  implements ICommandHandler<CreateJobCommand>
{
  constructor(@Inject(Jobs) private readonly repository: Jobs) {}

  async execute(command: CreateJobCommand) {
    const job = Job.create(
      command.id,
      command.customerName,
      command.type,
      command.status,
      command.appointmentDate,
      command.technician,
    );

    this.repository.save(job);
  }
}
