import { Test, TestingModule } from '@nestjs/testing';
import { StoriesRepository } from '../stories.repository';
import { StoriesService } from '../stories.service';
import { StoriesRepositoryMock } from './stories.repository.mock';

describe('StoriesService', () => {
  let storiesService: StoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: StoriesRepository.name,
          useClass: StoriesRepositoryMock,
        },
        StoriesService,
      ],
    }).compile();

    storiesService = module.get<StoriesService>(StoriesService);
  });
  it('should be defined', () => {
    expect(storiesService).toBeDefined();
  });
  describe('getAllStories method', () => {
    it('should return array of stories', async () => {
      return storiesService.getAllStories().then((stories) => {
        expect(stories.length).toBeGreaterThan(0);
      });
    });
  });
  describe('getAuthorStories method', () => {
    it('should return array of stories', async () => {
      return storiesService.getAuthorStories('').then((stories) => {
        expect(stories.length).toBeGreaterThan(0);
      });
    });
  });

  describe('saveAuthorStory method', () => {
    it('should save author story', async () => {
      return storiesService
        .saveAuthorStory({ author: '', title: '', body: '' })
        .then((stories) => {
          expect(stories).toEqual({ author: '', title: '', body: '' });
        });
    });
  });
  describe('deleteAuthorStory method', () => {
    it('should delete author story', async () => {
      return storiesService.deleteAuthorStory(2).then((story) => {
        expect(story).toEqual({ n: 1 });
      });
    });
  });

  describe('updateAuthorStories method', () => {
    it('should return updated story', async () => {
      return storiesService
        .updateAuthorStory({ id: 1, author: '', title: '', body: '' })
        .then((stories) => {
          expect(stories).toEqual({ id: 1, author: '', title: '', body: '' });
        });
    });
  });
});
