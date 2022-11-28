import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';
import { natsMock } from '../../utils/nats.mock';
import { StoriesService } from '../stories.service';

describe('StoriesService', () => {
  let storiesService: StoriesService;
  let simulationsNatsClient: jest.Mocked<ClientProxy>;

  beforeEach(() => {
    simulationsNatsClient = natsMock<ClientProxy>('send');
    storiesService = new StoriesService(simulationsNatsClient);
  });

  it('should be defined', () => {
    expect(storiesService).toBeDefined();
  });

  describe('getAllStories method', () => {
    beforeAll(() => {
      simulationsNatsClient.send.mockReturnValueOnce(of('mocked data'));
    });
    it('should send data to queue', () => {
      storiesService.getAllStories();
      expect(simulationsNatsClient.send).toBeCalledWith('get.stories', {});
    });
  });

  describe('getAuthorStories method', () => {
    beforeAll(() => {
      simulationsNatsClient.send.mockReturnValueOnce(of('mocked data'));
    });
    it('should send data to queue', () => {
      storiesService.getAuthorStories('author1');
      expect(simulationsNatsClient.send).toBeCalledWith(
        'get.author.stories',
        'author1'
      );
    });
  });

  describe('saveAuthorStories method', () => {
    beforeAll(() => {
      simulationsNatsClient.send.mockReturnValueOnce(of('mocked data'));
    });
    it('should send data to queue', () => {
      storiesService.saveAuthorStory({ author: '', body: '', title: '' });
      expect(simulationsNatsClient.send).toBeCalledWith('save.author.story', {
        author: '',
        body: '',
        title: '',
      });
    });
  });

  describe('deleteAuthorStories method', () => {
    beforeAll(() => {
      simulationsNatsClient.send.mockReturnValueOnce(of('mocked data'));
    });
    it('should send data to queue', () => {
      storiesService.deleteAuthorStory(4);
      expect(simulationsNatsClient.send).toBeCalledWith(
        'delete.author.story',
        4
      );
    });
  });

  describe('updateAuthorStories method', () => {
    beforeAll(() => {
      simulationsNatsClient.send.mockReturnValueOnce(of('mocked data'));
    });
    it('should send data to queue', () => {
      storiesService.updateAuthorStory({
        id: 3,
        author: '',
        body: '',
        title: '',
      });
      expect(simulationsNatsClient.send).toBeCalledWith('update.author.story', {
        id: 3,
        author: '',
        body: '',
        title: '',
      });
    });
  });
});
