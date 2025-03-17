export type FieldsErros = {
  [field: string]: string[]
}

export interface ValidatorErrorsInterface<PropsValidated> {
  errors: FieldsErros
  validatedData: PropsValidated
  validate(data: any): boolean
}
