import { SaveStoryDto, Story, UpdateStoryDto } from '@models';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { BaseAbstractRepository } from '../base-abstract.repository';

export class StoriesRepository extends BaseAbstractRepository<Story> {
  constructor(
    @InjectModel(Story.name) private readonly repository: Model<Story>
  ) {
    super(repository);
  }

  override async save(storyDto: SaveStoryDto): Promise<Story> {
    const docs = await this.repository.find().sort({ id: 1 });
    const highestIndex = docs[docs.length - 1].id;
    return this.repository.create({ id: highestIndex + 1, ...storyDto });
  }

  async updateAuthorStory(
    updateStoryDto: UpdateStoryDto
  ): Promise<UpdateWriteOpResult> {
    const updateQuery = {};
    Object.keys(updateStoryDto).forEach((key) => {
      if (key === 'title') updateQuery[key] = updateStoryDto[key];
      if (key === 'body') updateQuery[key] = updateStoryDto[key];
    });
    return this.repository.updateOne(
      { author: updateStoryDto.author, id: updateStoryDto.id },
      { $set: updateQuery }
    );
  }
}
