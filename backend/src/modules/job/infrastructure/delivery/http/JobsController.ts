import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobListView, initJobListView } from '../../view/JobListView';
import { JobView, initJobView } from '../../view/JobView';
import { formatISO, parseISO } from 'date-fns';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
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
import { SearchJobsQuery } from 'src/modules/job/domain/model/job/query/SearchJobsQuery';
import { FindJobQuery } from 'src/modules/job/domain/model/job/query/FindJobQuery';
import { Job } from 'src/modules/job/domain/model/job/Job';

@Controller('jobs')
export class JobsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

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
  async create(@Body() body: CreateJobCommandDTO): Promise<void> {
    validateOrReject(body);

    await this.commandBus.execute(
      // use serializer to instantiate the command
      new CreateJobCommand(
        JobId.generate(),
        new JobCustomerName(body.customerName),
        new JobType(body.jobType),
        new JobStatus(body.status),
        JobAppointmentDate.fromString(body.appointmentDate),
        new JobTechnician(body.technician),
      ),
    );
  }

  @Get()
  async findAll(): Promise<JobListView> {
    // @TODO use interceptor to serialize model into json
    const jobs = await this.queryBus.execute(new SearchJobsQuery());

    return initJobListView(
      jobs.map((job: Job) =>
        // @TODO use serializer
        initJobView(
          job.id.toString(),
          job.customerName.toString(),
          job.type.toString(),
          job.status.toString(),
          job.appointmentDate.toString(),
          job.technician.toString(),
        ),
      ),
    );
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<JobView> {
    // @TODO use interceptor to serialize model into json
    const maybeJob = await this.queryBus.execute(
      new FindJobQuery(new JobId(id)),
    );

    return maybeJob
      .map((job: Job) =>
        // @TODO use serializer
        initJobView(
          job.id.toString(),
          job.customerName.toString(),
          job.type.toString(),
          job.status.toString(),
          job.appointmentDate.toString(),
          job.technician.toString(),
        ),
      )
      .orDefaultLazy(() => {
        throw new NotFoundException();
      });
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
  async update(
    @Param('id') id: string,
    @Body() body: UpdateJobCommandDTO,
  ): Promise<void> {
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
  async remove(@Param('id') id: string): Promise<void> {
    await this.commandBus.execute(
      // use serializer to instantiate the command
      new DeleteJobCommand(new JobId(id)),
    );
  }
}
