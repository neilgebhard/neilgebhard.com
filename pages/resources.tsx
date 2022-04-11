const react = [
  {
    label: "React",
    href: "https://reactjs.org/",
  },
  {
    label: "React Router",
    href: "https://reactrouter.com/",
  },
  {
    label: "React Query",
    href: "https://react-query.tanstack.com/reference/useQuery",
  },
  {
    label: "awesome-react",
    href: "https://github.com/enaqx/awesome-react",
  },
  {
    label: "Framer Motion",
    href: "https://www.framer.com/motion/",
  },
  {
    label: "React Icons",
    href: "https://react-icons.github.io/react-icons/",
  },
  {
    label: "React Spinners",
    href: "https://www.davidhu.io/react-spinners/",
  },
];

const testing = [
  {
    label: "jest-dom",
    href: "https://github.com/testing-library/jest-dom",
  },
  {
    label: "RTL queries",
    href: "https://testing-library.com/docs/queries/about/",
  },
  {
    label: "Cypress",
    href: "https://www.cypress.io/",
  },
];

const blogs = [
  { label: "Kent C. Dodds", href: "https://kentcdodds.com/blog" },
  { label: "Dan Abramov", href: "https://overreacted.io/" },
];

const learning = [
  {
    label: "MDN",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { label: "JavaScript Info", href: "javascript.info" },
];

const design = [
  {
    label: "Section Divider",
    href: "https://www.shapedivider.app/",
  },
  {
    label: "CSS Separator Generator",
    href: "https://wweb.dev/resources/css-separator-generator/",
  },
  { label: "Radix", href: "https://www.radix-ui.com/" },
  {
    label: "Contrast Checker",
    href: "https://coolors.co/contrast-checker/112a46-acc8e5",
  },
  {
    label: "Open color",
    href: "https://yeun.github.io/open-color/",
  },
  {
    label: "Flat UI Colors",
    href: "https://flatuicolors.com/",
  },
];

const renderLinks = (links) => {
  return (
    <ul className="list-none p-0">
      {links.map(({ label, href }) => (
        <li>
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
  );
};

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
  );
}
