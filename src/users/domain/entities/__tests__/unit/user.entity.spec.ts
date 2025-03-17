import { faker } from '@faker-js/faker'
import { UserEntity, UserProps } from '../../user.entity'
describe('User Entity unit test', () => {
  let sut: UserEntity
  let props: UserProps

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
    sut = new UserEntity(props)
  })
  it('should create a user entity', () => {
    expect(sut).toBeInstanceOf(UserEntity)
    expect(sut.props.name).toBe(props.name)
    expect(sut.props.email).toBe(props.email)
    expect(sut.props.password).toBe(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })
})
