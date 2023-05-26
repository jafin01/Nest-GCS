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
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File & { buffer: Buffer },
  ) {
    try {
      const uploadedUrl = await this.gcsService.uploadFile(
        file,
        file.originalname,
      );
      return uploadedUrl;
    } catch (error) {
      return error.message;
    }
  }
}
