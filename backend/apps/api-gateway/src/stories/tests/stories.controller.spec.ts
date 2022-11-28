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

  it('should be defined', () => {
    expect(storiesController).toBeDefined();
  });

  describe('getAllStories method', () => {
    it('should return array of stories', () => {
      return storiesController
        .getAllStories()
        .toPromise()
        .then((stories) => {
          expect(stories.length).toEqual(1);
        });
    });
  });

  describe('getAuthorStories method', () => {
    it('should return array of stories', () => {
      return storiesController
        .getAuthorStories('')
        .toPromise()
        .then((stories) => {
          expect(stories.length).toEqual(1);
        });
    });
  });

  describe('saveAuthorStory method', () => {
    it('should return saved story', () => {
      return storiesController
        .saveAuthorStory({ author: '', body: '', title: '' })
        .toPromise()
        .then((story) => {
          expect(story).toEqual({ author: '', body: '', title: '' });
        });
    });
  });

  describe('deleteAuthorStory method', () => {
    it('should return delete result', () => {
      return storiesController
        .deleteAuthorStory(3)
        .toPromise()
        .then((story) => {
          expect(story).toEqual({ id: 3 });
        });
    });
  });

  describe('updateAuthorStory method', () => {
    it('should return update result', () => {
      return storiesController
        .updateAuthorStory({ id: 1, author: '', body: '', title: '' })
        .toPromise()
        .then((story) => {
          expect(story).toEqual({ id: 1, author: '', body: '', title: '' });
        });
    });
  });
});
