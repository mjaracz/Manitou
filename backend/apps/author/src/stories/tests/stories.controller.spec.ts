import { Test, TestingModule } from '@nestjs/testing';
import { StoriesController } from '../stories.controller';
import { StoriesService } from '../stories.service';
import { StoriesServiceMock } from './stories.service.mock';

describe('StoriesController', () => {
  let storiesController: StoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: StoriesService,
          useClass: StoriesServiceMock,
        },
      ],
      controllers: [StoriesController],
    }).compile();
    storiesController = module.get<StoriesController>(StoriesController);
  });

  describe('getAllStories method', () => {
    it('should return stories array', async () => {
      return storiesController.getAllStories().then((stories) => {
        expect(stories.length).toBeGreaterThan(0);
      });
    });
  });

  describe('getAuthorStories method', () => {
    it('should return stories array', async () => {
      return storiesController.getAuthorStories('').then((stories) => {
        expect(stories.length).toBeGreaterThan(0);
      });
    });
  });

  describe('saveAuthorStory method', () => {
    it('should save author story', async () => {
      return storiesController
        .saveAuthorStory({ author: '', title: '', body: '' })
        .then((stories) => {
          expect(stories).toEqual({ author: '', title: '', body: '' });
        });
    });
  });

  describe('deleteAuthorStory method', () => {
    it('should delete author story', async () => {
      return storiesController.deleteAuthorStory(2).then((deleteResult) => {
        expect(deleteResult).toEqual({ id: 2 });
      });
    });
  });

  describe('updateAuthorStory method', () => {
    it('should update author story', async () => {
      return storiesController
        .updateAuthorStory({ id: 2, author: '', title: '', body: '' })
        .then((updateResult) => {
          expect(updateResult).toEqual({
            id: 2,
            author: '',
            title: '',
            body: '',
          });
        });
    });
  });
});
