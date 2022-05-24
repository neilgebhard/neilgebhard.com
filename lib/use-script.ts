import { useEffect, useState } from 'react'

const useScript = (params) => {
  const { url, theme, issueTerm, repo, ref } = params

  const [status, setStatus] = useState(url ? 'loading' : 'idle')

  // run the useEffect when the url of the script changes
  useEffect(() => {
    if (!url) {
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
    const setAttributeStatus = (event) => {
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
