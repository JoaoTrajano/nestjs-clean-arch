import { Entity } from '@/shared/domain/entities/user.entity'
import { RepositoryInterface } from './repository.interface'

export type SortDirection = 'asc' | 'desc'

export type SearcProps<Filter = string> = {
  page?: number
  perPage?: number
  sort?: string | null
  filter?: Filter
  sortDir?: SortDirection | null
}

export class SearchParams {
  protected _page: number = 1
  protected _perPage: number = 15
  protected _sort: string | null
  protected _filter: string | null
  protected _sortDir: SortDirection | null

  constructor(props: SearcProps) {
    this._page = props.page
    this._perPage = props.perPage
    this._sort = props.sort
    this._filter = props.filter
    this._sortDir = props.sortDir
  }

  get page(): number {
    return this._page
  }

  private set page(value: number) {
    this._page = value
  }

  get perPage(): number {
    return this._perPage
  }

  private set perPage(value: number) {
    this._perPage = value
  }

  get sort(): string | null {
    return this._sort
  }

  private set sort(value: string | null) {
    this._sort = value
  }

  get filter(): string | null {
    return this._filter
  }

  private set filter(value: string | null) {
    this._filter = value
  }

  get sortDir(): SortDirection | null {
    return this._sortDir
  }

  private set sortDir(value: SortDirection | null) {
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
