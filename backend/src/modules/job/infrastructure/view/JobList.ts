import { Job } from './Job';

export type JobList = {
  jobs: Job[];
};

export const createJobList = (jobs: Job[]): JobList => ({
  jobs,
});
