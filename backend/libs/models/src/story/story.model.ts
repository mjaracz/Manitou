import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StoryDocument = Story & Document;

@Schema({ versionKey: false, autoIndex: true })
export class Story {
  @Prop({ required: true, unique: true, index: true })
  id: number;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  body: string;
}

const StorySchema = SchemaFactory.createForClass(Story);
StorySchema.index({ author: 'text', title: 'text' });

export { StorySchema };
