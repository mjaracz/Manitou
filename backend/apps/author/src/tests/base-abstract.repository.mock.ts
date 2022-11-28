export class BaseAbstractRepositoryMock<Repo> {
  async find(query: Partial<Repo>) {
    return [{ id: 'mock' }];
  }

  async findOne(query: Partial<Repo>) {
    return { id: 'mock' };
  }

  async delete(id: number) {
    return { n: 1 };
  }
}
