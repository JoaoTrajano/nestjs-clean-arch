import { Entity } from '@/shared/domain/entities/user.entity'
import { InMemoryRepository } from '../../in-memory.repository'

type StubEntityProps = {
  name: string
  email: string
  password: string
}

class StubEntity extends Entity<StubEntityProps> {}

class StubInMemoryRepository extends InMemoryRepository<StubEntity> {}

let sut: StubInMemoryRepository

beforeEach(() => {
  sut = new StubInMemoryRepository()
})

describe('In memory repository unit tests', () => {
  it('should be able insert entities new', async () => {
    const newEntity = new StubEntity({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      password: '123',
    })

    const newEntitySaved = await sut.save(newEntity)

    expect(sut.items.length > 0).toBeTruthy()
    expect(newEntitySaved.toJSON()).toStrictEqual(newEntitySaved.toJSON())
    expect(newEntitySaved.toJSON()).toStrictEqual(sut.items[0].toJSON())
  })
})
