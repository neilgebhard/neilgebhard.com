type ResourceLink = [string, string]

const react: ResourceLink[] = [
  ['React', 'https://reactjs.org/'],
  ['React Router', 'https://reactrouter.com/'],
  ['React Query', 'https://react-query.tanstack.com/reference/useQuery'],
  ['awesome-react', 'https://github.com/enaqx/awesome-react'],
  ['Framer Motion', 'https://www.framer.com/motion/'],
  ['React Icons', 'https://react-icons.github.io/react-icons/'],
  ['React Spinners', 'https://www.davidhu.io/react-spinners/']
]

const testing: ResourceLink[] = [
  ['jest-dom', 'https://github.com/testing-library/jest-dom'],
  ['RTL queries', 'https://testing-library.com/docs/queries/about/'],
  ['Cypress', 'https://www.cypress.io/']
]

const blogs: ResourceLink[] = [
  ['Kent C. Dodds', 'https://kentcdodds.com/blog'],
  ['Dan Abramov', 'https://overreacted.io/']
]

const learning: ResourceLink[] = [
  ['MDN', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
  ['JavaScript Info', 'javascript.info']
]

const design: ResourceLink[] = [
  ['Section Divider', 'https://www.shapedivider.app/'],
  [
    'CSS Separator Generator',
    'https://wweb.dev/resources/css-separator-generator/'
  ],
  ['Radix', 'https://www.radix-ui.com/'],
  ['Contrast Checker', 'https://coolors.co/contrast-checker/112a46-acc8e5'],
  ['Open color', 'https://yeun.github.io/open-color/'],
  ['Flat UI Colors', 'https://flatuicolors.com/']
]

const renderLinks = (links: ResourceLink[]) => {
  return (
    <ul className="list-none p-0">
      {links.map(([label, href]) => (
        <li key={href}>
          <a
            className="text-black"
            href={href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Resources() {
  return (
    <>
      <h2>React</h2>
      {renderLinks(react)}
      <h2>Testing</h2>
      {renderLinks(testing)}
      <h2>Blogs</h2>
      {renderLinks(blogs)}
      <h2>Learning</h2>
      {renderLinks(learning)}
    </>
  )
}
