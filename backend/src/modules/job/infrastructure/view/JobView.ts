export type JobView = {
  id: string;
  customerName: string;
  type: string;
  status: string;
  appointmentDate: string;
  technician: string;
};

export const initJobView = (
  id: string,
  customerName: string,
  type: string,
  status: string,
  appointmentDate: string,
  technician: string,
): JobView => ({
  id,
  customerName,
  type,
  status,
  appointmentDate,
  technician,
});
