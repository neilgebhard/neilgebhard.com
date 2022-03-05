---
title: "React Testing Library: Queries"
date: "2022-03-05"
---

React Testing Library is the standard testing library used in React. It is focused on testing components as if the user is interacting with them as opposed testing their implementation details. The point is that you don't want your tests to break if you refactor your code.

Here’s a way to check if some text content exists in the document. Notice that we use `getByText`. This function returns an error if the text doesn’t exist.

![getByText example](/images/react-testing-library/get-by-text.png)

To check if some text content doesn’t exist, you’d want to use `queryByText`. This function doesn’t return an error if it can't find anything. Then you can assert that the element doesn't exist.

![queryByText example](/images/react-testing-library/query-by-text.png)

What if you’d like to test for something asynchronous like an API call? You’d need to use `findByText`.

![findByText example](/images/react-testing-library/find-by-text.png)

Just like that, we’ve covered **[React Testing Library’s three types of queries](https://testing-library.com/docs/queries/about)**. To summarize, use `getBy...` to assert an element is there, `queryBy...` to assert an element is missing, and `findBy...` to assert that an element will eventually be there.

In general, you'll want to use **[queries that encourage good accessibility practices](https://testing-library.com/docs/queries/about#priority)**. `getByRole` is the best one of all.

![getByRole example](/images/react-testing-library/get-by-role.png)

When querying for form fields, `getByLabelText` is great because users identify them by their label text.

![getByLabelText example](/images/react-testing-library/get-by-label-text.png)
