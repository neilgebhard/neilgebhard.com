import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  dracula,
  coldarkCold
} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useTheme } from 'next-themes'
import useMount from '../hooks/useMount'

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const { theme } = useTheme()
    const { isMounted } = useMount()
    const codeTheme = theme === 'dark' ? dracula : coldarkCold
    const match = /language-(\w+)/.exec(className || '')

    return !inline && match && isMounted ? (
      <SyntaxHighlighter
        style={codeTheme}
        language={match[1]}
        PreTag={React.Fragment}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
}

export default CodeBlock
