import { Module } from '@nestjs/common';
import { JobModule } from './modules/job/infrastructure/job.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    JobModule,
    MongooseModule.forRoot('mongodb://root:wVKi6FaX@mongo:27017', {
      dbName: 'projection',
    }),
  ],
})
export class AppModule {}
