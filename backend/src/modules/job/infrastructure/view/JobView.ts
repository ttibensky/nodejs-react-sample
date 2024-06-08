export type JobView = {
  id: string;
  customerName: string;
  jobType: string;
  status: string;
  appointmentDate: string;
  technician: string;
};

export const initJobView = (
  id: string,
  customerName: string,
  jobType: string,
  status: string,
  appointmentDate: string,
  technician: string,
): JobView => ({
  id,
  customerName,
  jobType,
  status,
  appointmentDate,
  technician,
});
