import { validateSync } from 'class-validator'
import {
  FieldsErros,
  ValidatorErrorsInterface,
} from './validator-fields.interface'

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorErrorsInterface<PropsValidated>
{
  errors: FieldsErros = null
  validatedData: PropsValidated = null

  validate(data: PropsValidated): boolean {
    const errors = validateSync(data as object)

    if (errors.length) {
      this.errors = {}

      for (const error of errors) {
        this.errors[error.property] = Object.values(error.constraints)
      }
    } else {
      this.validatedData = data
    }

    return !errors.length
  }
}
