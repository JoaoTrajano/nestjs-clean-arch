import { UserProps } from '@/users/domain/entities/user.entity'
import {
  UserRules,
  UserValidator,
  UserValidatorFactory,
} from '../../user.validator'
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'

let sut: UserValidator
let userProps: UserProps

describe('User Validator unit tests', () => {
  beforeEach(() => {
    sut = UserValidatorFactory.create()
    userProps = UserDataBuilder({})
  })

  it('should be return false when passed null for the validate function', () => {
    const isValid = sut.validate(null as any)
    expect(isValid).toBeFalsy()
  })

  describe('[ NAME FIELD ] invalid cases', () => {
    it('should return false when the value passed is empty', () => {
      const isValid = sut.validate({ ...userProps, name: '' })
      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual(['name should not be empty'])
    })

    it('should return false when the value passed not is string', () => {
      const isValid = sut.validate({ ...userProps, name: 123 as any })
      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ])
    })

    it('should return false when the value passed is more then 255 character', () => {
      const isValid = sut.validate({ ...userProps, name: 'a'.repeat(256) })
      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual([
        'name must be shorter than or equal to 255 characters',
      ])
    })
  })

  describe('[ NAME FIELD ] valid cases', () => {
    it('should return true when the values passed is valid', () => {
      const isValid = sut.validate(userProps)
      expect(isValid).toBeTruthy()
      expect(sut.errors).toBeNull()
      expect(sut.validatedData).toStrictEqual(new UserRules(userProps))
    })
  })

  describe('[ EMAIL FIELD ] invalid cases', () => {
    it('should return false when the value passed is empty', () => {
      const isValid = sut.validate({ ...userProps, email: '' })
      expect(isValid).toBeFalsy()
      expect(sut.errors['email']).toStrictEqual([
        'email should not be empty',
        'email must be an email',
      ])
    })

    it('should return false when the value passed not is string', () => {
      const isValid = sut.validate({ ...userProps, email: 123 as any })
      expect(isValid).toBeFalsy()
      expect(sut.errors['email']).toStrictEqual(['email must be an email'])
    })
  })

  describe('[ EMAIL FIELD ] valid cases', () => {
    it('should return true when the values passed is valid', () => {
      const isValid = sut.validate(userProps)
      expect(isValid).toBeTruthy()
      expect(sut.errors).toBeNull()
      expect(sut.validatedData).toStrictEqual(new UserRules(userProps))
    })
  })

  describe('[ PASSWORD FIELD ] invalid cases', () => {
    it('should return false when the value passed is empty', () => {
      const isValid = sut.validate({ ...userProps, password: '' })
      expect(isValid).toBeFalsy()
      expect(sut.errors['password']).toStrictEqual([
        'password should not be empty',
      ])
    })

    it('should return false when the value passed not is string', () => {
      const isValid = sut.validate({ ...userProps, password: 123 as any })
      expect(isValid).toBeFalsy()
      expect(sut.errors['password']).toStrictEqual([
        'password must be a string',
      ])
    })
  })

  describe('[ PASSWORD FIELD ] valid cases', () => {
    it('should return true when the values passed is valid', () => {
      const isValid = sut.validate(userProps)
      expect(isValid).toBeTruthy()
      expect(sut.errors).toBeNull()
      expect(sut.validatedData).toStrictEqual(new UserRules(userProps))
    })
  })

  describe('[ CREATED AT FIELD ] invalid cases', () => {
    it('should return false when the value passed is not Date', () => {
      const isValid = sut.validate({ ...userProps, createdAt: 123 as any })
      expect(isValid).toBeFalsy()
      expect(sut.errors['createdAt']).toStrictEqual([
        'createdAt must be a Date instance',
      ])
    })
  })

  describe('[ CREATED AT FIELD ] valid cases', () => {
    it('should return true when the values passed is valid', () => {
      const isValid = sut.validate(userProps)
      expect(isValid).toBeTruthy()
      expect(sut.errors).toBeNull()
      expect(sut.validatedData).toStrictEqual(new UserRules(userProps))
      expect(sut.validatedData['createdAt']).toBeInstanceOf(Date)
    })
  })
})
