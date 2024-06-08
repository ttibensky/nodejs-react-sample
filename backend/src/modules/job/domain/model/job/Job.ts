import { JobType } from './value-objects/JobType';
import { JobStatus } from './value-objects/JobStatus';
import { JobAppointmentDate } from './value-objects/JobAppointmentDate';
import { JobTechnician } from './value-objects/JobTechnician';
import { JobCustomerName } from './value-objects/JobCustomerName';
import { JobId } from './value-objects/JobId';
import { AggregateRoot } from 'src/lib/common/domain/model/AggregateRoot';

export class Job extends AggregateRoot {
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

  static create(
    id: JobId,
    customerName: JobCustomerName,
    type: JobType,
    status: JobStatus,
    appointmentDate: JobAppointmentDate,
    technician: JobTechnician,
  ): Job {
    return new this(
      id,
      customerName,
      type,
      status,
      appointmentDate,
      technician,
    );
  }

  update(
    customerName: JobCustomerName,
    type: JobType,
    status: JobStatus,
    appointmentDate: JobAppointmentDate,
    technician: JobTechnician,
  ): void {
    this.customerName = customerName;
    this.type = type;
    this.status = status;
    this.appointmentDate = appointmentDate;
    this.technician = technician;
  }
}
