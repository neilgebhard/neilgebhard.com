---
title: "The Modern Web Stack"
date: "2021-12-19"
---

This article focuses on choosing a tech stack for web development. This is an important step in building your project. It will have many implications down the line. We'll consider both front-end and back-end tools. It's worth noting that no tech stack is universally seen as the "best".

It depends on your goals. Do you want to get hired? _Learn popular tech stacks_. Do you want tech that lasts? _Check what's trending_. Do you want to go freelance? _Look for developer experience_.

You can't learn everything. At some point, you will set goals and make choices yourself. These are the choices I made.

## JavaScript

Use **TypeScript** everywhere. There are too many perks not to. At the very least, you can still write normal JavaScript while the compiler infers types for you. TypeScript is the future of JavaScript.

**Node.js** is a must. It's important for back-end and server-side code. Front-end devs rely on it for setting up their development environments. You need it for package management with npm.

For building front-end user interfaces, **React** is the standard. It's the most popular JavaScript framework. It's the most desirable skill by employers for the front-end. It has an extensive ecosystem and wide community support. It's a pleasure to work with. It's a no-brainer. Honorable mention to **Vue.js**.

After React, **Next.js** is the next evolution. It's great for server-side rendering, but it has a ton of other benefits too. Fullstack functionality, file-based routing, and a gamut of small performance optimizations are a few.

## CSS

For CSS frameworks, learn **TailwindCSS**. This is the future of styling. It provides a remarkable dev experience. It's a perfect combination of flexibility and power. It's my personal go-to.

If you want to use a preprocessor, use **SASS**. Many companies use it. It's makes styling more organized and maintainable. It's been around for a while and it's still very relevant.

**Bootstrap** or **Material UI** are serviceable. They're great for prototyping or iterating. If you don't care about uniqueness, it's a sensible choice. Once you learn one, you sort of learn them all.

## Server-side Framework

For back-end, there are so many options. **Express** is practical as it lets you to stay in JavaScript. Do you prefer another language? **Django** (Python), **Laravel** (PHP), **Java Spring**, and **Ruby on Rails** are other noteworthy options. Stick to languages you know.

## Database

The two most popular databases are **PostgresSQL** and **MongoDB**. It's SQL vs. NoSQL. There is no clear winner. PostgreSQL is more robust while MongoDB is more scalable and easier to learn, but these margins are small. Consider using an ORM like **Sequelize** or **Mongoose**.

## API

For API design, there's **REST** and **GraphQL**. REST is server-driven while GraphQL is client-driven. Is your app centered around the server or client? The answer to this question determines your selection.

## Testing

With React, I would use **React Testing Library** for unit and integration tests and **Jest** for assertions. For end-to-end testing, **Cypress** is becoming the favorite.

## Version control

**Git** & **Github**. Everyone uses it. It's the home of open source.

## Deployment

**Netlify**, **Vercel**, or **Heroku** are the choices for small apps. Netlify is for static websites, Vercel is for Next.js, and Heroku is for full-stack.

_For big apps, go with AWS, Google Cloud, or Microsoft Azure._

## IDE

**VS Code**. This is the only IDE you need to know.
