import qs from 'query-string'

interface UrlQueryParams {
  params: string
  key: string
  value: string
}

interface RemoveUrlQueryParams {
  params: string
  keysToRemove: string[]
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const queryString = qs.parse(params)

  queryString[key] = value

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  })
}

export function removeKeysFromUrlQuery({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) {
  const queryString = qs.parse(params)

  for (const key of keysToRemove) {
    delete queryString[key]
  }

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    { skipNull: true },
  )
}
