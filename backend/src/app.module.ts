import { Module } from '@nestjs/common';
import { JobModule } from './modules/job/infrastructure/job.module';

@Module({
  imports: [JobModule],
})
export class AppModule {}
