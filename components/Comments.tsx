import { useRef } from 'react'
import useScript from '../lib/use-script'
import { useTheme } from 'next-themes'

export default function Comments() {
  const comment = useRef(null)
  const { theme } = useTheme()

  const status = useScript({
    url: 'https://utteranc.es/client.js',
    theme: theme === 'dark' ? 'photon-dark' : 'github-light',
    issueTerm: 'url',
    repo: 'neilgebhard/neilgebhard.com',
    ref: comment
  })

  return <div className="mt-10 w-full">{<div ref={comment}></div>}</div>
}
