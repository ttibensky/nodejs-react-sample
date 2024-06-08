import { CommandId } from 'src/lib/common/domain/model/value-objects/CommandId';
import { JobType } from '../value-objects/JobType';
import { Status } from '../value-objects/Status';
import { AppointmentDate } from '../value-objects/AppointmentDate';
import { Technician } from '../value-objects/Technician';
import { CustomerName } from '../value-objects/CustomerName';

export class CreateJobCommand {
  id: CommandId;
  customerName: CustomerName;
  jobType: JobType;
  status: Status;
  appointmentDate: AppointmentDate;
  technician: Technician;

  constructor(
    customerName: CustomerName,
    jobType: JobType,
    status: Status,
    appointmentDate: AppointmentDate,
    technician: Technician,
  ) {
    this.id = CommandId.generate();
    this.customerName = customerName;
    this.jobType = jobType;
    this.status = status;
    this.appointmentDate = appointmentDate;
    this.technician = technician;
  }
}
