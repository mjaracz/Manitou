import { Story } from '@models';
import { BaseAbstractRepositoryMock } from '../../tests/base-abstract.repository.mock';

export class StoriesRepositoryMock extends BaseAbstractRepositoryMock<Story> {
  async save(data: Partial<Story>) {
    return { ...data };
  }

  async updateAuthorStory(data: Partial<Story>) {
    return { ...data };
  }
}
