import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudModule } from './crud/crud.module';
import { GcsModule } from './gcs/gcs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-gcs'),
    GcsModule,
    CrudModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
