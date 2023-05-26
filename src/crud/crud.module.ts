import { Module } from '@nestjs/common';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';
import { GcsService } from 'src/gcs/gcs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudSchema } from 'src/schemas/crud.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Crud', schema: CrudSchema }])],
  controllers: [CrudController],
  providers: [CrudService, GcsService],
})
export class CrudModule {}
