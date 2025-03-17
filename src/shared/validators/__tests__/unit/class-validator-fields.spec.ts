import { ClassValidatorFields } from '../../class-validator-fields'
import * as libClassValidator from 'class-validator'
import { IsNotEmpty } from 'class-validator'

class MyDTO {
  @IsNotEmpty()
  field: string
}

class StubClassValidatorFields extends ClassValidatorFields<{
  field: string
}> {}

describe('ClassValidatorFields', () => {
  let sut: StubClassValidatorFields

  beforeEach(() => {
    sut = new StubClassValidatorFields()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })

  it('should validate with errors', () => {
    const validateSyncSpyOn = jest.spyOn(libClassValidator, 'validateSync')
    validateSyncSpyOn.mockReturnValue([
      {
        property: 'field',
        constraints: {
          isNotEmpty: 'field should not be empty',
        },
      },
    ])

    const dto = Object.assign(new MyDTO(), { field: '' })

    expect(sut.validate(dto)).toBe(false)
    expect(sut.validatedData).toBeNull()
    expect(sut.errors).toStrictEqual({
      field: ['field should not be empty'],
    })
  })

  it('should validate data', () => {
    const dto = Object.assign(new MyDTO(), { field: 'value1' })

    expect(sut.validate(dto)).toBe(true)
    expect(sut.validatedData).toEqual(dto)
  })

  it('should not validate data', () => {
    const dto = Object.assign(new MyDTO(), { field: '' })

    expect(sut.validate(dto)).toBe(false)
    expect(sut.errors).toEqual({
      field: ['field should not be empty'],
    })
  })

  it('should validate without errors', () => {
    const validateSyncSpyOn = jest.spyOn(libClassValidator, 'validateSync')
    validateSyncSpyOn.mockReturnValue([])

    const dto = Object.assign(new MyDTO(), { field: 'value1' })

    expect(sut.validate(dto)).toBe(true)
    expect(sut.validatedData).toBe(dto)
    expect(sut.errors).toBeNull()
  })
})
