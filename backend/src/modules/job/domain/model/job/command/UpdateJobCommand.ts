import { JobType } from '../value-objects/JobType';
import { JobStatus } from '../value-objects/JobStatus';
import { JobAppointmentDate } from '../value-objects/JobAppointmentDate';
import { JobTechnician } from '../value-objects/JobTechnician';
import { JobCustomerName } from '../value-objects/JobCustomerName';
import { JobId } from '../value-objects/JobId';
import { BaseCommand } from 'src/lib/common/domain/model/command/BaseCommand';

export class UpdateJobCommand extends BaseCommand {
  id: JobId;
  customerName: JobCustomerName;
  type: JobType;
  status: JobStatus;
  appointmentDate: JobAppointmentDate;
  technician: JobTechnician;

  constructor(
    id: JobId,
    customerName: JobCustomerName,
    type: JobType,
    status: JobStatus,
    appointmentDate: JobAppointmentDate,
    technician: JobTechnician,
  ) {
    super();
    this.id = id;
    this.customerName = customerName;
    this.type = type;
    this.status = status;
    this.appointmentDate = appointmentDate;
    this.technician = technician;
  }
}
