import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { promisify } from 'util';
import * as fs from 'fs';
import { join } from 'path';

const writeFileAsync = promisify(fs.writeFile);

@Injectable()
export class GcsService {
  private storage: Storage;
  private bucketName: string;

  constructor() {
    // const keyFilePath = join(__dirname, '../.././config/gcs/storage-key.json');
    const credentialsPath =
      '/Users/hammymy/Developer/nest-gcp/configs/gcs/storage-key.json';
    const credentials = JSON.parse(fs.readFileSync(credentialsPath).toString());
    this.storage = new Storage({ credentials });
    this.bucketName = 'sadhya-product-images';
  }

  async uploadFile(
    file: Express.Multer.File,
    destination: string,
  ): Promise<string> {
    try {
      const bucket = this.storage.bucket(this.bucketName);
      const filePath = `/tmp/${file.originalname}`; // temporary file path

      // Save the file buffer to the temporary file
      await writeFileAsync(filePath, file.buffer);

      const fileOptions = {
        destination,
        metadata: {
          contentType: file.mimetype,
        },
      };

      const uploadedFile = await bucket.upload(filePath, fileOptions);

      // Make the uploaded file publicly accessible
      await uploadedFile[0].makePublic();

      console.log('uploadedFile', uploadedFile[0].publicUrl());
      // Return the public URL of the uploaded file
      return uploadedFile[0].publicUrl();
    } catch (error) {
      console.log('error in service', error);
      throw new Error(error);
    }
  }
}

// function writeFileAsync(filePath: string, buffer: Buffer) {
//   throw new Error('Function not implemented.');
// }
