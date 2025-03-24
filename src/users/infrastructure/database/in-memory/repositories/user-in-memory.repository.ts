import { InMemoryRepository } from '@/shared/infrastructure/repositories/in-memory.repository'
import { UserInMemoryRepositoryInterface } from './user-in-memory.interface.repository'
import { UserEntity } from '@/users/domain/entities/user.entity'

export class UserInMemoryRepository
  extends InMemoryRepository<UserEntity>
  implements UserInMemoryRepositoryInterface
{
  async findByEmail(email: string): Promise<UserEntity | null> {
    const userEntity = this.items.find(item => item.email === email)
    if (!userEntity) return null

    return userEntity
  }

  async emailExists(email: string): Promise<boolean> {
    const userEntity = this.items.find(item => item.email === email)
    if (!userEntity) return false

    return true
  }
}
