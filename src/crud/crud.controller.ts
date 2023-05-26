import { Body, Controller } from '@nestjs/common';
import { Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CrudService } from './crud.service';
import { CreateDto } from './dto/create.dto';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Post()
  async createSomething(@Body() createDto: CreateDto) {
    try {
      const createdItem = await this.crudService.createSomething(createDto);
      return createdItem;
    } catch (error) {
      return error.message;
    }
  }
}
