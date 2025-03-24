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
  describe('[ METHOD ] - save', () => {
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

    it('should be able update a user if exist in the list', async () => {
      const newEntity = new StubEntity({
        name: 'Jhon Doe',
        email: 'jhondoe@example.com',
        password: '123',
      })

      const newEntitySaved = await sut.save(newEntity)

      newEntitySaved.props.name = 'Name updated'
      const newEntityUpdated = await sut.save(newEntity)

      expect(newEntityUpdated.props.name).toStrictEqual('Name updated')
    })
  })

  describe('[ METHOD ] - delete', () => {
    it('should not be able delete a entity if not found in the list', async () => {
      const newEntity = new StubEntity({
        name: 'Jhon Doe',
        email: 'jhondoe@example.com',
        password: '123',
      })

      const entityDeleted = await sut.delete(newEntity.id)
      expect(entityDeleted).toBeNull()
    })

    it('should be able delete a entity if found in the list', async () => {
      const newEntity = new StubEntity({
        name: 'Jhon Doe',
        email: 'jhondoe@example.com',
        password: '123',
      })

      const newEntitySaved = await sut.save(newEntity)
      const entityDeleted = await sut.delete(newEntitySaved.id)

      expect(entityDeleted).not.toBeNull()
      expect(sut.items.length === 0).toBeTruthy()
    })
  })

  describe('[ METHOD ] - findById', () => {
    it('should not be able find a entity by id if not exist in the list', async () => {
      const newEntity = new StubEntity({
        name: 'Jhon Doe',
        email: 'jhondoe@example.com',
        password: '123',
      })

      const entityFound = await sut.findById(newEntity.id)

      expect(entityFound).toBeNull()
    })
    it('should be able find a entity by id', async () => {
      const newEntity = new StubEntity({
        name: 'Jhon Doe',
        email: 'jhondoe@example.com',
        password: '123',
      })

      const newEntitySaved = await sut.save(newEntity)
      const entityFound = await sut.findById(newEntitySaved.id)

      expect(entityFound.toJSON()).toStrictEqual(newEntitySaved.toJSON())
      expect(entityFound).not.toBeNull()
    })
  })

  describe('[ METHOD ] - findAll', () => {
    it('should be able find all entities save in the list', async () => {
      Array.from({ length: 10 }).forEach(async () => {
        const newEntity = new StubEntity({
          name: 'Jhon Doe',
          email: 'jhondoe@example.com',
          password: '123',
        })
        await sut.save(newEntity)
      })

      const allEntities = await sut.findAll()

      expect(allEntities.length === 10).toBeTruthy()
    })
  })
})
