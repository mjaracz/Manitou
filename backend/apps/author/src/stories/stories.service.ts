import { SaveStoryDto, UpdateStoryDto } from '@models';
import { Inject, Injectable } from '@nestjs/common';
import { StoriesRepository } from './stories.repository';

@Injectable()
export class StoriesService {
  constructor(
    @Inject(StoriesRepository.name)
    private readonly storiesRepository: StoriesRepository
  ) {}

  async getAllStories() {
    return this.storiesRepository.find({});
  }

  async getAuthorStories(author: string) {
    return this.storiesRepository.find({ author });
  }

  async saveAuthorStory(storyDto: SaveStoryDto) {
    return this.storiesRepository.save(storyDto);
  }

  async deleteAuthorStory(id: number) {
    return this.storiesRepository.delete({ id });
  }

  async updateAuthorStory(updateStoryDto: UpdateStoryDto) {
    return this.storiesRepository.updateAuthorStory(updateStoryDto);
  }
}
