import { Entity } from '../../user.entity'
import { validate } from 'uuid'

describe('Entity abstract unit test', () => {
  type Props = {
    prop1: string
    prop2: number
  }

  class StubEntity extends Entity<Props> {}

  it('should set props and id', () => {
    const props = { prop1: 'prop1', prop2: 1 }
    const sut = new StubEntity(props)

    expect(sut.props).toStrictEqual(props)
    expect(sut.id).toBeDefined()
    expect(sut.id).not.toBeNull()
    expect(validate(sut.id)).toBeTruthy()
  })

  it('should set id valid', () => {
    const props = { prop1: 'prop1', prop2: 1 }
    const id = '123e4567-e89b-12d3-a456-426614174000'
    const sut = new StubEntity(props, id)

    expect(validate(sut.id)).toBeTruthy()
    expect(sut.id).toBe(id)
  })
  it('should convert the entity to a object', () => {
    const props = { prop1: 'prop1', prop2: 1 }
    const sut = new StubEntity(props)
    expect(sut.toJSON()).toStrictEqual({ id: sut.id, ...props })
  })
})
