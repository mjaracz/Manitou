import { DeleteResult, SaveStoryDto, Story, UpdateStoryDto } from '@models';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UpdateWriteOpResult } from 'mongoose';

@Injectable()
export class StoriesService {
  constructor(
    @Inject('NATS_CLIENT') private readonly natsClient: ClientProxy
  ) {}

  getAllStories() {
    return this.natsClient.send<Story[]>('get.stories', {});
  }

  getAuthorStories(author: string) {
    return this.natsClient.send<Story[]>('get.author.stories', author);
  }

  saveAuthorStory(storyDto: SaveStoryDto) {
    return this.natsClient.send<Story>('save.author.story', storyDto);
  }

  deleteAuthorStory(id: number) {
    return this.natsClient.send<DeleteResult>('delete.author.story', id);
  }

  updateAuthorStory(updateStoryDto: UpdateStoryDto) {
    return this.natsClient.send<UpdateWriteOpResult>(
      'update.author.story',
      updateStoryDto
    );
  }
}
