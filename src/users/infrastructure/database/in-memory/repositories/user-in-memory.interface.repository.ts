import { UserEntity } from '@/users/domain/entities/user.entity'
import { SearchableRepositoryInterface } from '@/shared/infrastructure/repositories/searchable-repository.interface'

export interface UserInMemoryRepositoryInterface
  extends SearchableRepositoryInterface<UserEntity, any, any> {
  findByEmail(email: string): Promise<UserEntity | null>
  emailExists(email: string): Promise<boolean>
}
