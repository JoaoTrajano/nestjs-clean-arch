export type FieldsErrors = {
  [field: string]: string[]
}

export interface ValidatorErrorsInterface<PropsValidated> {
  errors: FieldsErrors
  validatedData: PropsValidated
  validate(data: any): boolean
}
