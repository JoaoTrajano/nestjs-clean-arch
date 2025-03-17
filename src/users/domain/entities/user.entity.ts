import { Entity } from '@/shared/domain/entities/user.entity'

export type UserProps = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
  ) {
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  updateName(name: string): void {
    this.props.name = name
  }

  updatePasswprd(password: string): void {
    this.props.password = password
  }

  get name(): string {
    return this.props.name
  }

  private set name(name: string) {
    this.props.name = name
  }

  get email(): string {
    return this.props.email
  }

  get password(): string {
    return this.props.password
  }

  private set password(password: string) {
    this.props.password = password
  }

  get createdAt(): Date {
    return this.props.createdAt
  }
}
