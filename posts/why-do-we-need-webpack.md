---
title: "Why do we need Webpack?"
date: "2022-01-31"
---

Well, us programmers don’t _need_ Webpack per say. It is possible to make web applications without Webpack. But the tool is something that makes coding applications easier and more efficient.

During development, we are often writing code in many different files. This is essential for large applications. This adheres to the DRY principle, removing redundancy in code. It also follows the single responsibility principle, compartmentalizing ideas in their own files. But how do we combine these files for the final product? That's what Webpack is for.

Webpack is a module bundler. It combines all of the files of a project (JavaScript, JSX, CSS, etc.) into one single file for production. In short, the benefits of using Webpack in your project are **modularity and network performance**.

Modularity allows you to break down your codebase into many small files. This makes your application easier to work on and digest. It also makes blocks of code re-usable. This is especially important for large projects and team environments.

The network performance boost relates to HTTP requests. Each script tag loading a JavaScript file makes an HTTP request. Every HTTP request has a latency penalty attached to it. Allowing the browser to load a single file removes that penalty.

There are other benefits too. Webpack has the functionality to codesplit. **Codesplitting** allows your code to be bundled separately and loaded as needed by your application. For example, you may have a block of JavaScript that may not be needed until the user navigates to a certain part of your site. You can delay the loading of that block of JavaScript by carving it out of your main JavaScript file and putting it in its own. Then, the user will only load that file when they navigate to the page that needs it. This strategy makes the file that is initially loaded by your application smaller.

Webpack can also minify the code of your application. **Minification** reduces the sizes of files loaded by your by application in production removing whitespace and line breaks, as well as shortening variable names.

Another feature of Webpack, **Hot Module Replacement**, is a developer experience boost. During development, this feature allows you to add and remove code without refreshing the browser. It does this by updating modules of your application by swapping changes in files made in real-time. Application state even persists through every save. It's a wonder.

If you're using React like me, the use of modules lends to the React way of developing applications. Dividing your codebase into many individual files lets you take advantage of React's compositional nature. With modules, we can build small, reusable pieces of code that can be shared by many different components. Smaller components are also easier to test and comprehend.
