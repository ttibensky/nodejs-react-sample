import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Job } from 'src/modules/job/domain/model/job/Job';
import { Jobs } from 'src/modules/job/domain/model/job/Jobs';
import { UpdateJobCommand } from 'src/modules/job/domain/model/job/command/UpdateJobCommand';

@CommandHandler(UpdateJobCommand)
export class UpdateJobCommandHandler
  implements ICommandHandler<UpdateJobCommand>
{
  constructor(@Inject(Jobs) private readonly jobs: Jobs) {}

  async execute(command: UpdateJobCommand): Promise<void> {
    const job = (await this.jobs.get(command.id)).extract() as Job;

    job.update(
      command.customerName,
      command.type,
      command.status,
      command.appointmentDate,
      command.technician,
    );

    this.jobs.update(job);
  }
}
