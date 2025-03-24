import { Entity } from '@/shared/domain/entities/user.entity'

export interface RepositoryInterface<E extends Entity> {
  save(entity: E): Promise<E>
  delete(id: string): Promise<void | null>
  findById(id: string): Promise<E | null>
  findAll(): Promise<E[]>
}
