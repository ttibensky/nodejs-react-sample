import { Job } from './Job';

export type JobList = {
  jobs: Job[];
};

export const initJobList = (jobs: Job[]): JobList => ({
  jobs,
});
