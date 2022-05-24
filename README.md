# neilgebhard.com

My personal website and portfolio.

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Content Management**: [Content Layer](https://github.com/contentlayerdev/contentlayer)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations** [Framer Motion](https://www.framer.com/motion/)

## Overview

- `components/*` - Modular, re-usable UI components
- `hooks/*` - React hooks for extracting logic
- `lib/*` - Helpful utilities or code for external services
- `pages/*` - Pre-rendered pages using Next.js routing
- `posts/*` - Blog posts consisting of marked up content
- `public/*` - Static assets including favicons

## Running Locally

Clone GitHub repository, install the dependencies, and run the development server:

```bash
$ git clone https://github.com/neilgebhard/neilgebhard.com
$ cd neilgebhard.com
$ npm i
$ npm run dev
```

Create a .env file similar to .env.example with required environment variables.

The app will be run on [http://localhost:3000](http://localhost:3000).
