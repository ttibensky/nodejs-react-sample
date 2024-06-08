import { Controller, Get } from '@nestjs/common';
import { JobList, createJobList } from '../../view/JobList';
import { createJob } from '../../view/Job';
import { parseISO } from 'date-fns';

@Controller('jobs')
export class JobsController {
  @Get()
  findAll(): JobList {
    return createJobList([
      createJob(
        1,
        'John Doe',
        'Plumbing',
        'Scheduled',
        parseISO('2024-06-15T09:00:00Z'),
        'Jane Smith',
      ),
      createJob(
        2,
        'Alice Johnson',
        'Electrical',
        'Completed',
        parseISO('2024-05-20T14:00:00Z'),
        'Bob Brown',
      ),
    ]);
  }
}
