import { Entity } from '@/shared/domain/entities/user.entity'
import { RepositoryInterface } from './repository.interface'

export abstract class InMemoryRepository<E extends Entity>
  implements RepositoryInterface<E>
{
  private items: E[] = []

  async insert(entity: E): Promise<E> {
    this.items.push(entity)
    return entity
  }

  async update(entity: E): Promise<E | null> {
    const index = this.items.findIndex(item => item._id === entity._id)

    if (index < 0) return null

    this.items[index] = entity
    return entity
  }

  async delete(id: string): Promise<void> {
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
}
