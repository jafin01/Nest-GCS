import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Crud {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: Number,
    required: true,
  })
  price: number;

  @Prop({
    type: String,
    required: true,
  })
  description: string;

  @Prop({
    type: String,
    required: true,
  })
  category: string;

  @Prop({
    type: Number,
    required: true,
  })
  quantity: number;

  @Prop({
    type: String,
    required: true,
  })
  image: string;
}

export const CrudSchema = SchemaFactory.createForClass(Crud);
