export class NotFoundError extends Error {
  constructor(public error: string) {
    super(error)

    this.name = this.constructor.name
  }
}
