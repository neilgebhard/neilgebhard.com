---
title: "React Testing Library: Interactions"
date: "2022-03-08"
---

Building off my previous post about **[queries](https://neilgebhard.com/blog/react-testing-library-queries)**, this post will cover another part of React Testing library: interactions. Sometimes, you need to interact with elements inside your unit tests to ensure your application is working properly. The **[User Event](https://testing-library.com/docs/ecosystem-user-event/)** library is the standard library used to accomplish these simulations. Let's look at some examples.

A common way of interacting with elements by end-users is clicking. It's a great way to test things like buttons, checkboxes, and their corresponding event handlers. Here's a way to click a checkbox in a unit test using the User Event library.

![User Event library clicking example](/images/react-testing-library/user-event-click.png)

Buttons would be clicked in a similar fashion.

Another common way of interacting with elements is by typing. This would be important for testing things like forms and textboxes. Here's an example of typing into a textbox.

![User Event library typing example](/images/react-testing-library/user-event-type.png)

There are many other ways of interacting with elements. Here is the exhaustive list:

- `dblClick`
- `keyboard`
- `upload`
- `clear`
- `selectOptions`
- `deselectOptions`
- `tab`
- `hover`
- `unhover`
- `paste`

Check out the the **[User Event](https://testing-library.com/docs/ecosystem-user-event/)** documentation for further info.
