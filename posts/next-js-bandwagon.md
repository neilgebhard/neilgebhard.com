---
title: "What's the big deal with Next.js?"
date: "2021-12-12"
---

When choosing a framework for your project, a few questions pop into my head. How do we increase performance? How do we reduce complexity? How do we scale?

With this in mind, Next.js does a great job in answering these questions. It does it in several ways, building on vanilla JavaScript.

**Static generation (SSG) allows your single-page application (SPA) to serve static HTML files.**

Content gets pre-loaded into HTML at build time. This means static HTML is delivered to clients on initial load. With this setup, HTML files are cached by CDNs, increasing data transfer speeds.

**Server-side rendering (SSR) allows dynamic data to have HTML files built on the server."**

Sometimes, HTML files can't be known at build time. Page content changes over time depending on data and the users. Nonetheless, re-deploying your website every time content changes is unfeasible. With SSR, we can still have content that is dynamic and pre-rendered. It is done by fetching on the server before files are delivered. This is quicker because it removes the overhead of browser-to-server round trip requests.

To be fair, SSG and SSR are available in vanilla React too, but it has to be added manually. Why not have these features built into the framework? _That's what reducing complexity is all about._

**SSG and SSR improve search engine optimization (SEO).**

By removing client-side fetching, the content of your page is stable on initial load. _Google web crawlers see exactly what your users see._ There's no flickering. You're not left wondering if your page content loads in a timely manner.

**Next.js has automatic code-splitting.**

Code-splitting delays the load of certain files by dividing your app into small pieces of code. _It improves performance by making the client only download files the user needs._ This also prevents the initial requirement of downloading gigantic files. Also, having many small, individual files enables caching.

**Next.js makes routing easier.**

In Next.js, files map to URLs. Doing it this way, developers end up writing less code. Typical SPAs need a programmatic setup of routing (e.g. React Router). Next.js streamlines the process.

_React codebases often have components map to pages anyway (i.e. `/pages/Home`)._

**Next.js has full-stack capabilities**.

Next.js supports a backend inside itself. Most projects of any meaningful significance need a backend. How will we develop the next Twitter or Facebook without one? This removes the necessity to add an entirely separate codebase and framework. _Oftentimes, the backend is in a completely different language too._

**Next.js deployment is simple.**

Vercel designed Next.js with deployment in mind. It only takes a few clicks and your app is live. Serverless functions make Next.js apps scale infinitely. _It is production-ready by default._

**What about create-react-app?**

CRA is still useful for learning React and prototyping, or if performance optimizations aren't important.

I would also check out Vite or Parcel for lightweight React setups.

**When should you not use Next.js?**

If you have an existing codebase, it's probably not worth all the effort to migrate and refactor.

There is some extra work to learn the framework.

If your app has data that is frequently changing such as an analytics dashboard, pre-rendering is less useful.

**In conclusion,**

Next.js is modern React. There aren't many downsides. The documentation is great and it's well-supported. Almost every use-case is met. I would recommend starting new projects using this amazing framework.
