import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GcpModule } from './gcs/gcs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    GcpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
