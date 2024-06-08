import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobList, initJobList } from '../../view/JobList';
import { Job, initJob } from '../../view/Job';
import { parseISO } from 'date-fns';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBody } from '@nestjs/swagger';
import { CreateJobCommandDTO } from './dto/CreateJobCommandDTO';
import { UpdateJobCommandDTO } from './dto/UpdateJobCommandDTO';
import { validateOrReject } from 'class-validator';
import { CreateJobCommand } from 'src/modules/job/domain/model/job/command/CreateJobCommand';
import { JobCustomerName } from 'src/modules/job/domain/model/job/value-objects/JobCustomerName';
import { JobType } from 'src/modules/job/domain/model/job/value-objects/JobType';
import { JobStatus } from 'src/modules/job/domain/model/job/value-objects/JobStatus';
import { JobAppointmentDate } from 'src/modules/job/domain/model/job/value-objects/JobAppointmentDate';
import { JobTechnician } from 'src/modules/job/domain/model/job/value-objects/JobTechnician';
import { JobId } from 'src/modules/job/domain/model/job/value-objects/JobId';
import { UpdateJobCommand } from 'src/modules/job/domain/model/job/command/UpdateJobCommand';
import { DeleteJobCommand } from 'src/modules/job/domain/model/job/command/DeleteJobCommand';

@Controller('jobs')
export class JobsController {
  constructor(private readonly commandBus: CommandBus) {}

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
        new JobCustomerName(body.customerName),
        new JobType(body.jobType),
        new JobStatus(body.status),
        JobAppointmentDate.fromString(body.appointmentDate),
        new JobTechnician(body.technician),
      ),
    );
  }

  @Get()
  findAll(): JobList {
    // @TODO use interceptor to serialize model into json
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

  @Get(':id')
  find(@Param('id') id: number): Job {
    // @TODO use interceptor to serialize model into json
    return initJob(
      id,
      'John Doe',
      'Plumbing',
      'Scheduled',
      parseISO('2024-06-15T09:00:00Z'),
      'Jane Smith',
    );
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
  @Put(':id')
  @HttpCode(204)
  async update(@Param('id') id: number, @Body() body: UpdateJobCommandDTO) {
    validateOrReject(body);

    await this.commandBus.execute(
      // use serializer to instantiate the command
      new UpdateJobCommand(
        new JobId(id),
        new JobCustomerName(body.customerName),
        new JobType(body.jobType),
        new JobStatus(body.status),
        JobAppointmentDate.fromString(body.appointmentDate),
        new JobTechnician(body.technician),
      ),
    );
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: number) {
    await this.commandBus.execute(
      // use serializer to instantiate the command
      new DeleteJobCommand(new JobId(id)),
    );
  }
}
