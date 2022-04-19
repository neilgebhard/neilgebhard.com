import { useEffect, useState } from 'react'

export default function useMount() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return { isMounted }
}
