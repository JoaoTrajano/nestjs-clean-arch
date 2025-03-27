import { Entity } from '@/shared/domain/entities/user.entity'
import { RepositoryInterface } from './repository.interface'
import { isNumber } from 'class-validator'

export type SortDirection = 'asc' | 'desc'

export type SearcProps<Filter = string> = {
  page?: number
  perPage?: number
  sort?: string | null
  filter?: Filter
  sortDir?: SortDirection | null
}

export const PAGE_VALUE_DEFAULT = 1
export const PER_PAGE_VALUE_DEFAULT = 10
export class SearchParams {
  protected _page: number
  protected _perPage: number
  protected _sort: string | null
  protected _filter: string | null
  protected _sortDir: SortDirection | null

  constructor(props: SearcProps = {}) {
    this.page = props.page ?? PAGE_VALUE_DEFAULT
    this.perPage = props.perPage ?? PER_PAGE_VALUE_DEFAULT
    this.sort = props.sort
    this.filter = props.filter
    this.sortDir = props.sortDir
  }

  get page(): number {
    return this._page
  }

  private set page(value: number) {
    if (!isNumber(value)) {
      this._page = PAGE_VALUE_DEFAULT
      return
    }

    const page = +value

    if (Number.isNaN(page) || page <= 0 || parseInt(String(page)) !== page) {
      this._page = PAGE_VALUE_DEFAULT
      return
    }

    this._page = page
  }

  get perPage(): number {
    return this._perPage
  }

  private set perPage(value: number) {
    if (!isNumber(value)) {
      this._perPage = PER_PAGE_VALUE_DEFAULT
      return
    }

    const perPage = +value

    if (
      Number.isNaN(perPage) ||
      perPage <= 0 ||
      parseInt(String(perPage)) !== perPage
    ) {
      this._perPage = PER_PAGE_VALUE_DEFAULT
      return
    }

    this._perPage = perPage
  }

  get sort(): string | null {
    return this._sort
  }

  private set sort(value: string | null) {
    this._sort = !value ? null : value
  }

  get filter(): string | null {
    return this._filter
  }

  private set filter(value: string | null) {
    this._filter = !value ? null : value
  }

  get sortDir(): SortDirection | null {
    return this._sortDir
  }

  private set sortDir(value: SortDirection | null) {
    if (!this._sort) {
      this._sortDir = null
      return
    }

    if (value !== 'asc' && value !== 'desc') {
      this._sortDir = 'desc'
      return
    }

    this._sortDir = value
  }
}

export interface SearchableRepositoryInterface<
  E extends Entity,
  SearchInput,
  SearchOutput,
> extends RepositoryInterface<E> {
  search(props: SearchParams): Promise<SearchOutput>
}
