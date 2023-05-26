import { Module } from '@nestjs/common';
import { GcsController } from './gcs.controller';
import { GcsService } from './gcs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudSchema } from 'src/schemas/crud.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Crud', schema: CrudSchema }])],
  controllers: [GcsController],
  providers: [GcsService],
})
export class GcsModule {}
