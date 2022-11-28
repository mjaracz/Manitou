import { SaveStoryDto, UpdateStoryDto } from '@models';
import { of } from 'rxjs';

export class StoriesServiceMock {
  getAllStories() {
    return of(['mock stories arr']);
  }

  getAuthorStories(author: string) {
    return of([`mock author: ${author}- stories`]);
  }

  saveAuthorStory(storyDto: SaveStoryDto) {
    return of({ ...storyDto });
  }

  deleteAuthorStory(id: number) {
    return of({ id });
  }

  updateAuthorStory(updateStoryDto: UpdateStoryDto) {
    return of({ ...updateStoryDto });
  }
}
