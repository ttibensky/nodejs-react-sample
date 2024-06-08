import { JobType } from '../value-objects/JobType';
import { JobStatus } from '../value-objects/JobStatus';
import { JobAppointmentDate } from '../value-objects/JobAppointmentDate';
import { JobTechnician } from '../value-objects/JobTechnician';
import { JobCustomerName } from '../value-objects/JobCustomerName';

export class CreateJobCommand {
  customerName: JobCustomerName;
  type: JobType;
  status: JobStatus;
  appointmentDate: JobAppointmentDate;
  technician: JobTechnician;

  constructor(
    customerName: JobCustomerName,
    jobType: JobType,
    status: JobStatus,
    appointmentDate: JobAppointmentDate,
    technician: JobTechnician,
  ) {
    this.customerName = customerName;
    this.type = jobType;
    this.status = status;
    this.appointmentDate = appointmentDate;
    this.technician = technician;
  }
}
