import { useState, useEffect } from 'react'

export default function useURLState(
  key: string,
  initialValue: string = ''
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState<string>(() => {
    return new URLSearchParams(window.location.search).get(key) ?? initialValue
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    params.set(key, state)
    if (!state) params.delete(key)

    const search = params.toString()
    history.replaceState(
      null,
      '',
      search ? `?${search}` : window.location.pathname
    )
  }, [state])

  return [state, setState]
}
