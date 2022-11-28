import { SaveStoryDto, UpdateStoryDto } from '@models';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { StoriesService } from './stories.service';

@Controller()
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @MessagePattern('get.stories')
  getAllStories() {
    return this.storiesService.getAllStories();
  }

  @MessagePattern('get.author.stories')
  getAuthorStories(@Payload() author: string) {
    return this.storiesService.getAuthorStories(author);
  }

  @MessagePattern('save.author.story')
  saveAuthorStory(@Payload() storyDto: SaveStoryDto) {
    return this.storiesService.saveAuthorStory(storyDto);
  }

  @MessagePattern('delete.author.story')
  deleteAuthorStory(@Payload() id: number) {
    return this.storiesService.deleteAuthorStory(id);
  }

  @MessagePattern('update.author.story')
  updateAuthorStory(@Payload() updateStoryDto: UpdateStoryDto) {
    return this.storiesService.updateAuthorStory(updateStoryDto);
  }
}
