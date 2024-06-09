import { IsNotEmpty, Matches } from 'class-validator';

export class UpdateJobCommandDTO {
  @IsNotEmpty()
  readonly customerName: string;

  @IsNotEmpty()
  readonly type: string;

  @IsNotEmpty()
  readonly status: string;

  @IsNotEmpty()
  @Matches(
    /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(Z|\+[0-9]{2}:[0-9]{2})$/,
  )
  readonly appointmentDate: string;

  @IsNotEmpty()
  readonly technician: string;
}
