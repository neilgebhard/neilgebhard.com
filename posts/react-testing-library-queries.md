---
title: "React Testing Library: Queries"
date: "2022-03-05"
---

React Testing Library is the standard testing library used in React. It is focused on testing components as if the user is interacting with them as opposed testing their implementation details. The point is that you don't want your tests to break if you refactor your code.

Here’s a way to check if some text content exists in the document. Notice that we use `getByText`. This function returns an error if the text doesn’t exist.

```jsx
// App.test.jsx

import { render, screen } from "@testing-library/react";

const App = () => {
  return <h1>Hello world!</h1>;
};

test("renders hello world text", () => {
  render(<App />);
  const textContent = screen.getByText(/hello world/i);
  expect(textContent).toBeInTheDocument();
});
```

To check if some text content doesn’t exist, you’d want to use `queryByText`. This function doesn’t return an error if it can't find anything. Then you can assert that the element doesn't exist.

```jsx
// App.test.jsx

import { render, screen } from "@testing-library/react";

const App = () => {
  return <h1>Hello world!</h1>;
};

test("doesn't render hello universe text", () => {
  render(<App />);
  const textContent = screen.queryByText(/hello universe/i);
  expect(textContent).toBeNull();
});
```

What if you’d like to test for something asynchronous like an API call? You’d need to use `findByText`.

```jsx
// App.test.jsx

import { useState, useEffect } from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("data.json").then(({ data }) => setData(data));
  }, []);

  return <p>{data?.text}</p>;
};

test("renders hello world text", async () => {
  render(<App />);
  const textContent = await screen.findByText(/hello world/i);
  expect(textContent).toBeInTheDocument();
});
```

Just like that, we’ve covered **[React Testing Library’s three types of queries](https://testing-library.com/docs/queries/about)**. To summarize, use `getBy...` to assert an element is there, `queryBy...` to assert an element is missing, and `findBy...` to assert that an element will eventually be there.

In general, you'll want to use **[queries that encourage good accessibility practices](https://testing-library.com/docs/queries/about#priority)**. `getByRole` is the best one of all.

```jsx
// Button.test.jsx

import { render, screen } from "@testing-library/react";

const Button = () => {
  return <button type="submit">Submit</button>;
};

test("renders submit button", () => {
  render(<Button />);
  const button = screen.getByRole("button", { name: /Submit/ });
  expect(button).toBeInTheDocument();
});
```

When querying for form fields, `getByLabelText` is great because users identify them by their label text.

```jsx
// Input.test.jsx

import { render, screen } from "@testing-library/react";

const Input = ({ label }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input id={label} type="text" />
    </>
  );
};

test("renders input field", () => {
  render(<Input label="Name" />);
  const input = screen.getByLabelText(/Name/);
  expect(input).toBeInTheDocument();
});
```
