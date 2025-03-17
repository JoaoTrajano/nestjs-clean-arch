import { UserEntity, UserProps } from '../../user.entity'
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'
describe('User Entity unit test', () => {
  let sut: UserEntity
  let props: UserProps

  beforeEach(() => {
    props = UserDataBuilder({})
    sut = new UserEntity(props)
  })
  it('should create a user entity', () => {
    expect(sut).toBeInstanceOf(UserEntity)
    expect(sut.props.name).toBe(props.name)
    expect(sut.props.email).toBe(props.email)
    expect(sut.props.password).toBe(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('should get the name of the user by the Getter accessor method', () => {
    expect(sut.name).toBeDefined()
    expect(sut.name).toBe(props.name)
    expect(typeof sut.name).toBe('string')
  })

  it('should update the name of the user', () => {
    sut.updateName('new name')
    expect(sut.name).toBe('new name')
  })

  it('should update the password of the user', () => {
    sut.updatePassword('new password')
    expect(sut.password).toBe('new password')
  })

  it('should get the email of the user by the Getter accessor method', () => {
    expect(sut.email).toBeDefined()
    expect(sut.email).toBe(props.email)
    expect(typeof sut.email).toBe('string')
  })

  it('should get the password of the user by the Getter accessor method', () => {
    expect(sut.password).toBeDefined()
    expect(sut.password).toBe(props.password)
    expect(typeof sut.password).toBe('string')
  })

  it('should get the createdAt field by the Getter accessor method', () => {
    expect(sut.createdAt).toBeDefined()
    expect(sut.createdAt).toBeInstanceOf(Date)
  })
})
