import { SaveStoryDto, UpdateStoryDto } from '@models';

export class StoriesServiceMock {
  async getAllStories() {
    return ['mock stories arr'];
  }

  async getAuthorStories(author: string) {
    return [`mock author: ${author}- stories`];
  }

  async saveAuthorStory(storyDto: SaveStoryDto) {
    return { ...storyDto };
  }

  async deleteAuthorStory(id: number) {
    return { id };
  }

  async updateAuthorStory(updateStoryDto: UpdateStoryDto) {
    return { ...updateStoryDto };
  }
}
