import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { GcsService } from 'src/gcs/gcs.service';
import { Crud } from 'src/schemas/crud.schema';

@Injectable()
export class CrudService {
  constructor(
    private readonly gcsService: GcsService,
    @InjectModel(Crud.name)
    private readonly Crud: mongoose.Model<Crud>,
  ) {}

  async createSomething(createDto) {
    const { name, price, description, category, quantity, image } = createDto;

    try {
      const newCrud = this.Crud.create({
        name,
        price,
        description,
        category,
        quantity,
        image,
      });

      return newCrud;
    } catch (error) {
      return error.message;
    }
  }
}
