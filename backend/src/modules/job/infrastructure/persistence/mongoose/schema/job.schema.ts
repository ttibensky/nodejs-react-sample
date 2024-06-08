import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UuidIdentifier } from 'src/lib/common/domain/model/value-objects/common/UuidIdentifier';

export type JobDocument = HydratedDocument<Job>;

@Schema()
export class Job {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  customerName: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  appointmentDate: Date;

  @Prop({ required: true })
  technician: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);

JobSchema.virtual('id')
  .get(function () {
    return this._id;
  })
  .set(function (id: UuidIdentifier) {
    this._id = id.toString();

    return this;
  });
