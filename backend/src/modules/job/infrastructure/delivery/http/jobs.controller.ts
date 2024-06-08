import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { JobList, initJobList } from '../../view/JobList';
import { initJob } from '../../view/Job';
import { parseISO } from 'date-fns';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBody } from '@nestjs/swagger';
import { CreateJobCommandDTO } from './CreateJobCommandDTO';
import { validateOrReject } from 'class-validator';
import { CreateJobCommand } from 'src/modules/job/domain/model/job/command/CreateJobCommand';
import { CustomerName } from 'src/modules/job/domain/model/job/value-objects/CustomerName';
import { JobType } from 'src/modules/job/domain/model/job/value-objects/JobType';
import { Status } from 'src/modules/job/domain/model/job/value-objects/Status';
import { AppointmentDate } from 'src/modules/job/domain/model/job/value-objects/AppointmentDate';
import { Technician } from 'src/modules/job/domain/model/job/value-objects/Technician';

@Controller('jobs')
export class JobsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get()
  findAll(): JobList {
    return initJobList([
      initJob(
        1,
        'John Doe',
        'Plumbing',
        'Scheduled',
        parseISO('2024-06-15T09:00:00Z'),
        'Jane Smith',
      ),
      initJob(
        2,
        'Alice Johnson',
        'Electrical',
        'Completed',
        parseISO('2024-05-20T14:00:00Z'),
        'Bob Brown',
      ),
    ]);
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        customerName: {
          type: 'string',
          example: 'John Doe',
        },
        jobType: {
          type: 'string',
          example: 'Plumbing',
        },
        status: {
          type: 'string',
          example: 'Scheduled',
        },
        appointmentDate: {
          type: 'string',
          example: '2024-06-15T09:00:00Z',
        },
        technician: {
          type: 'string',
          example: 'Jane Smith',
        },
      },
    },
  })
  @Post()
  @HttpCode(204)
  async create(@Body() body: CreateJobCommandDTO) {
    validateOrReject(body);

    await this.commandBus.execute(
      // use serializer to instantiate the command
      new CreateJobCommand(
        new CustomerName(body.customerName),
        new JobType(body.jobType),
        new Status(body.status),
        AppointmentDate.fromString(body.appointmentDate),
        new Technician(body.technician),
      ),
    );
  }
}
