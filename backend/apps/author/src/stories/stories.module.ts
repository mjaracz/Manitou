import { Story, StorySchema } from '@models';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoriesController } from './stories.controller';
import { StoriesRepository } from './stories.repository';
import { StoriesService } from './stories.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Story.name, schema: StorySchema }]),
  ],
  controllers: [StoriesController],
  providers: [
    {
      provide: StoriesRepository.name,
      useClass: StoriesRepository,
    },
    StoriesService,
  ],
})
export class StoriesModule {}
