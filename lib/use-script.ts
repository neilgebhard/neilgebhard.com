import { useEffect, useState, RefObject } from 'react'

interface UseScriptParams {
  url: string
  theme: string
  issueTerm: string
  repo: string
  ref: RefObject<HTMLDivElement>
}

type ScriptStatus = 'idle' | 'loading' | 'ready' | 'error'

const useScript = (params: UseScriptParams): ScriptStatus => {
  const { url, theme, issueTerm, repo, ref } = params

  const [status, setStatus] = useState<ScriptStatus>(url ? 'loading' : 'idle')

  // run the useEffect when the url of the script changes
  useEffect(() => {
    if (!url || !ref.current) {
      setStatus('idle')
      return
    }

    let script = document.createElement('script')
    script.src = url
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('theme', theme)
    script.setAttribute('issue-term', issueTerm)
    script.setAttribute('repo', repo)

    // add script to document body
    ref.current.appendChild(script)

    // store status of the script
    const setAttributeStatus = (event: Event) => {
      setStatus(event.type === 'load' ? 'ready' : 'error')
    }

    script.addEventListener('load', setAttributeStatus)
    script.addEventListener('error', setAttributeStatus)

    return () => {
      // clean up
      if (script) {
        script.removeEventListener('load', setAttributeStatus)
        script.removeEventListener('error', setAttributeStatus)
      }
    }
  }, [url])
  return status
}

export default useScript
