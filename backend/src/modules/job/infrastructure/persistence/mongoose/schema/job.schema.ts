import { HydratedDocument, Schema } from 'mongoose';
import { Job } from 'src/modules/job/domain/model/job/Job';
import { JobAppointmentDate } from 'src/modules/job/domain/model/job/value-objects/JobAppointmentDate';
import { JobCustomerName } from 'src/modules/job/domain/model/job/value-objects/JobCustomerName';
import { JobId } from 'src/modules/job/domain/model/job/value-objects/JobId';
import { JobStatus } from 'src/modules/job/domain/model/job/value-objects/JobStatus';
import { JobTechnician } from 'src/modules/job/domain/model/job/value-objects/JobTechnician';
import { JobType } from 'src/modules/job/domain/model/job/value-objects/JobType';

export type JobDocument = HydratedDocument<Job>;

export const JobSchema = new Schema({
  _id: String,
  customerName: { type: String, get: (v: string) => new JobCustomerName(v) },
  type: { type: String, get: (v: string) => new JobType(v) },
  status: { type: String, get: (v: string) => new JobStatus(v) },
  appointmentDate: { type: Date, get: (v: Date) => new JobAppointmentDate(v) },
  technician: { type: String, get: (v: string) => new JobTechnician(v) },
});

JobSchema.virtual('id')
  .get(function (): JobId {
    return new JobId(this._id);
  })
  .set(function (id: JobId) {
    this._id = id.toString();

    return this;
  });
