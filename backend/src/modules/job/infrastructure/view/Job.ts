import { formatISO } from 'date-fns';

export type Job = {
  id: number;
  customerName: string;
  jobType: string;
  status: string;
  appointmentDate: string;
  technician: string;
};

export const createJob = (
  id: number,
  customerName: string,
  jobType: string,
  status: string,
  appointmentDate: Date,
  technician: string,
): Job => ({
  id,
  customerName,
  jobType,
  status,
  appointmentDate: formatISO(appointmentDate),
  technician,
});
