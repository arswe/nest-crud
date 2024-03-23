import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaType, Types } from 'mongoose';

@Schema()
export class AbstractSchema {
  @Prop({ type: SchemaType, default: Date.now })
  _id: Types.ObjectId;
}
