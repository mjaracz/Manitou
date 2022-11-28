import { SaveStoryDto, UpdateStoryDto } from '@models';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { StoriesService } from './stories.service';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Get()
  getAllStories() {
    return this.storiesService.getAllStories();
  }

  @Get(':author')
  getAuthorStories(@Param('author') author: string) {
    return this.storiesService.getAuthorStories(author);
  }

  @Post('save/:author')
  saveAuthorStory(@Body() storyDto: SaveStoryDto) {
    return this.storiesService.saveAuthorStory(storyDto);
  }

  @Delete('delete/:id')
  deleteAuthorStory(@Param('id', ParseIntPipe) id: number) {
    return this.storiesService.deleteAuthorStory(id);
  }

  @Put('update')
  updateAuthorStory(@Query() updateStory: UpdateStoryDto) {
    return this.storiesService.updateAuthorStory(updateStory);
  }
}
