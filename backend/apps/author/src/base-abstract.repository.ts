import { DeleteResult, Story } from '@models';
import { Model, UpdateWriteOpResult } from 'mongoose';

export abstract class BaseAbstractRepository<Repo> {
  private repo: Model<Repo>;

  protected constructor(injectedRepo: Model<Repo>) {
    this.repo = injectedRepo;
  }

  async find(query: Partial<Repo>): Promise<Repo[]> {
    return this.repo.find(query);
  }

  async findOne(query: Partial<Repo>): Promise<Repo> {
    return this.repo.findOne(query);
  }

  async delete(deleteQuery: Partial<Repo>): Promise<DeleteResult> {
    return this.repo.deleteOne(deleteQuery);
  }

  abstract save(data: Partial<Repo>): Promise<UpdateWriteOpResult | Story>;
}
