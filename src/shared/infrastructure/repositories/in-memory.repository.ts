import { Entity } from '@/shared/domain/entities/user.entity'
import { RepositoryInterface } from './repository.interface'
import { NotFoundError } from '@/shared/domain/errors/not-found-error'

export abstract class InMemoryRepository<E extends Entity>
  implements RepositoryInterface<E>
{
  public items: E[] = []

  async save(entity: E): Promise<E> {
    const hasEntity = await this._get(entity.id)
    if (hasEntity) return await this.update(entity)

    return await this.insert(entity)
  }

  async delete(id: string): Promise<void> {
    await this._get(id)
    this.items = this.items.filter(item => item._id !== id)
  }

  async findById(id: string): Promise<E | null> {
    const entity = this.items.find(item => item._id === id)
    if (!entity) return null

    return entity
  }

  async findAll(): Promise<E[]> {
    return this.items
  }

  private async _get(id: string): Promise<E | null> {
    const entity = this.items.find(item => item._id === id)
    if (!entity) return null

    return entity
  }

  private async update(entity: E): Promise<E> {
    const index = this.items.findIndex(item => item._id === entity._id)
    this.items[index] = entity

    return entity
  }

  private async insert(entity: E): Promise<E> {
    this.items.push(entity)
    return entity
  }
}
