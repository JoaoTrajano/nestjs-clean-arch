import { Entity } from '@/shared/domain/entities/user.entity'

export interface RepositoryInterface<E extends Entity> {
  insert(entity: E): Promise<E>
  update(entity: E): Promise<E>
  delete(id: string): Promise<void>
  findById(id: string): Promise<E | null>
  findAll(): Promise<E[]>
}
