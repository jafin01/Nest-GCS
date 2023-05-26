import { Body, Controller } from '@nestjs/common';
import { Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CrudService } from './crud.service';
import { CreateDto } from './dto/create.dto';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Post()
  @UseInterceptors(FileInterceptor('product-image'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File & { buffer: Buffer },
    @Body() createDto: CreateDto,
  ) {
    try {
      const uploadedUrl = await this.crudService.createSomething(
        createDto,
        file,
        `product-images/${file.originalname}`,
      );
      return 'uploadedUrl';
    } catch (error) {
      return error.message;
    }
  }
}
