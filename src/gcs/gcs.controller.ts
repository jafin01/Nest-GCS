import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { GcsService } from './gcs.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('gcs')
export class GcsController {
  constructor(private readonly gcsService: GcsService) {}
  @Post()
  @UseInterceptors(FileInterceptor('product-image'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File & { buffer: Buffer },
  ) {
    try {
      // console.log('file', file);
      const uploadedUrl = await this.gcsService.uploadFile(
        file,
        `product-images/${file.originalname}`,
      );
      return 'uploadedUrl';
    } catch (error) {
      return error.message;
    }
  }
}
