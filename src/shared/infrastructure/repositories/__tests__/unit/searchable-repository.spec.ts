import {
  PAGE_VALUE_DEFAULT,
  PER_PAGE_VALUE_DEFAULT,
  SearchParams,
} from '../../searchable-repository.interface'

describe('Search Repository unit test', () => {
  describe('SearchParms tests - [ PAGE ]', () => {
    it('should be able return the default value', () => {
      const sut = new SearchParams()
      expect(sut.page).toBe(PAGE_VALUE_DEFAULT)
    })

    it('should be able return the default value of the prop page if pass values incorrects ', () => {
      const params = [
        { page: null as any, expected: PAGE_VALUE_DEFAULT },
        { page: undefined as any, expected: PAGE_VALUE_DEFAULT },
        { page: '' as any, expected: PAGE_VALUE_DEFAULT },
        { page: 'test' as any, expected: PAGE_VALUE_DEFAULT },
        { page: 0, expected: PAGE_VALUE_DEFAULT },
        { page: -1, expected: PAGE_VALUE_DEFAULT },
        { page: 5.5, expected: PAGE_VALUE_DEFAULT },
        { page: true, expected: PAGE_VALUE_DEFAULT },
        { page: false, expected: PAGE_VALUE_DEFAULT },
        { page: {}, expected: PAGE_VALUE_DEFAULT },
      ]

      params.forEach(i => {
        expect(new SearchParams({ page: i.page }).page).toBe(i.expected)
      })
    })

    it('should be able return the value passed if is correct', () => {
      const params = [
        { page: 1, expected: 1 },
        { page: 2, expected: 2 },
      ]

      params.forEach(i => {
        expect(new SearchParams({ page: i.page }).page).toBe(i.expected)
      })
    })
  })

  describe('SearchParms tests - [ PER PAGE ]', () => {
    it('should be able return the default value', () => {
      const sut = new SearchParams()
      expect(sut.perPage).toBe(PER_PAGE_VALUE_DEFAULT)
    })

    it('should be able return the default value of the prop perPage if pass values incorrects ', () => {
      const params = [
        { perPage: null as any, expected: PER_PAGE_VALUE_DEFAULT },
        { perPage: undefined as any, expected: PER_PAGE_VALUE_DEFAULT },
        { perPage: '' as any, expected: PER_PAGE_VALUE_DEFAULT },
        { perPage: 'test' as any, expected: PER_PAGE_VALUE_DEFAULT },
        { perPage: 0, expected: PER_PAGE_VALUE_DEFAULT },
        { perPage: -1, expected: PER_PAGE_VALUE_DEFAULT },
        { perPage: 5.5, expected: PER_PAGE_VALUE_DEFAULT },
        { perPage: true, expected: PER_PAGE_VALUE_DEFAULT },
        { perPage: false, expected: PER_PAGE_VALUE_DEFAULT },
        { perPage: {}, expected: PER_PAGE_VALUE_DEFAULT },
      ]

      params.forEach(i => {
        expect(new SearchParams({ perPage: i.perPage }).perPage).toBe(
          i.expected,
        )
      })
    })

    it('should be able return the value passed if is correct', () => {
      const params = [
        { perPage: 1, expected: 1 },
        { perPage: 2, expected: 2 },
      ]

      params.forEach(i => {
        expect(new SearchParams({ perPage: i.perPage }).perPage).toBe(
          i.expected,
        )
      })
    })
  })

  describe('SearchParms tests - [ SORT ]', () => {
    it('should be able return the default value', () => {
      const sut = new SearchParams()
      expect(sut.sort).toBeNull()
    })

    it('should be able return the default value of the prop sort if pass values incorrects ', () => {
      const params = [
        { sort: null as any, expected: null },
        { sort: undefined as any, expected: null },
        { sort: '' as any, expected: null },
      ]

      params.forEach(i => {
        expect(new SearchParams({ sort: i.sort }).sort).toBe(i.expected)
      })
    })

    it('should be able return the value passed if is correct', () => {
      expect(new SearchParams({ sort: 'test' }).sort).toBe('test')
    })
  })

  describe('SearchParms tests - [ SORT DIR ]', () => {
    it('should be able return the default value', () => {
      const sut = new SearchParams()
      expect(sut.sortDir).toBeNull()
    })

    it('should be able return the default value if the prop sort is null', () => {
      expect(new SearchParams({ sortDir: 'asc' }).sort).toBeNull()
    })

    it('should be able return the default value of the prop sortDir if pass values incorrects ', () => {
      const params = [
        { sortDir: null as any, expected: 'desc' },
        { sortDir: undefined as any, expected: 'desc' },
        { sortDir: '' as any, expected: 'desc' },
      ]

      params.forEach(i => {
        expect(
          new SearchParams({ sort: 'test', sortDir: i.sortDir }).sortDir,
        ).toBe(i.expected)
      })
    })

    it('should be able return the value passed if is correct', () => {
      expect(new SearchParams({ sort: 'test', sortDir: 'asc' }).sortDir).toBe(
        'asc',
      )
      expect(new SearchParams({ sort: 'test', sortDir: 'desc' }).sortDir).toBe(
        'desc',
      )
    })
  })

  describe('SearchParms tests - [ FILTER ]', () => {
    it('should be able return the default value', () => {
      const sut = new SearchParams()
      expect(sut.filter).toBeNull()
    })

    it('should be able return the default value of the prop filter if pass values incorrects ', () => {
      const params = [
        { filter: null as any, expected: null },
        { filter: undefined as any, expected: null },
        { filter: '' as any, expected: null },
      ]

      params.forEach(i => {
        expect(new SearchParams({ filter: i.filter }).filter).toBe(i.expected)
      })
    })

    it('should be able return the value passed if is correct', () => {
      expect(new SearchParams({ filter: 'test' }).filter).toBe('test')
    })
  })
})
