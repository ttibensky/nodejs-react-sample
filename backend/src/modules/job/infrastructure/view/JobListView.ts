import { JobView } from './JobView';

export type JobListView = {
  jobs: JobView[];
};

export const initJobListView = (jobs: JobView[]): JobListView => ({
  jobs,
});
