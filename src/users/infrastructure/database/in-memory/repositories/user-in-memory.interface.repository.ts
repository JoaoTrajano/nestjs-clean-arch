import { UserEntity } from '@/users/domain/entities/user.entity'
import { RepositoryInterface } from '@/shared/infrastructure/repositories/repository.interface'

export interface UserInMemoryRepositoryInterface
  extends RepositoryInterface<UserEntity> {
  findByEmail(email: string): Promise<UserEntity | null>
  emailExists(email: string): Promise<boolean>
}
