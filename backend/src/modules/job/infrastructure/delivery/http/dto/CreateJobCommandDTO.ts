import { IsNotEmpty, Matches } from 'class-validator';

export class CreateJobCommandDTO {
  @IsNotEmpty()
  readonly customerName: string;

  @IsNotEmpty()
  readonly jobType: string;

  @IsNotEmpty()
  readonly status: string;

  @IsNotEmpty()
  @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z$/)
  readonly appointmentDate: string;

  @IsNotEmpty()
  readonly technician: string;
}
