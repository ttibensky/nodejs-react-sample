import { JobType } from '../value-objects/JobType';
import { JobStatus } from '../value-objects/JobStatus';
import { JobAppointmentDate } from '../value-objects/JobAppointmentDate';
import { JobTechnician } from '../value-objects/JobTechnician';
import { JobCustomerName } from '../value-objects/JobCustomerName';
import { JobId } from '../value-objects/JobId';

export class CreateJobCommand {
  constructor(
    public readonly id: JobId,
    public readonly customerName: JobCustomerName,
    public readonly type: JobType,
    public readonly status: JobStatus,
    public readonly appointmentDate: JobAppointmentDate,
    public readonly technician: JobTechnician,
  ) {}
}
