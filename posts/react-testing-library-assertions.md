---
title: "React Testing Library: Assertions"
date: "2022-03-09"
---

So we've talked about [queries](https://neilgebhard.com/blog/react-testing-library-queries) and [interactions](https://neilgebhard.com/blog/react-testing-library-interactions). There are a couple more parts to creating unit tests in React, particularly assertions and mock functions. For now, let's explore assertions.

An **assertion** is an expression that tests if a condition is true.

If not, a bug probably exists somewhere.

The libraries commonly used for assertions in React are [Jest](https://jestjs.io/docs/expect) and [jest-dom](https://github.com/testing-library/jest-dom). These two libraries are used in combination with React Testing Library to create unit tests. While Jest gives us a set of generic assertions, jest-dom let's us write tests that check conditions relating to the DOM. Let's look at some examples for each library.

Here are some **examples of Jest**. Note that each assertion is independent of the DOM. Still, they will be useful in writing tests in React.

![Jest assertions](/images/react-testing-library/jest-assertions.png)

Now let's look at some **examples of jest-dom**. Not how the assertions are checking various conditions about the DOM.

![Jest assertions](/images/react-testing-library/jest-dom-assertions.png)

There are many more assertions that were not mentioned in the examples. You should definitely check out the documentation to get the exhaustive list of assertions by visiting the webpages for [Jest](https://jestjs.io/docs/expect) and [jest-dom](https://github.com/testing-library/jest-dom)

Both Jest and jest-dom will be used together with React Testing Library to write unit tests in React. Together, they will give us all the assertions we need to ensure conditions are met and our application is working as expected.

Happy testing!
