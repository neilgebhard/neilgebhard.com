---
title: "React: on useEffect"
date: "2022-02-11"
---

Let’s talk about the React hook `useEffect`. It’s probably the most popular hook after `useState`. Some people may be confused by this hook. At first, it may seem complicated. But at its core, it’s really quite simple. So what does it do?

The `useEffect` hook allows something to be done after a React component renders. Then, it will run again if a variable you specify changes. That’s it. That’s all it really does.

![simple useEffect example](/images/use-effect-example-1.png)

Okay, well there’s more to it. What is the point of this hook? It gives developers a way to run side effects. A **side effect** is a fancy name for an interaction with something outside of the app’s local environment. Some examples of side effects are data fetching, setting up a subscription, manually modifying the DOM, and saving to local storage.

Another way to put it is that it synchronizes the state inside your app with the state outside your app.

Some confusion may be derived from its name as `useEffect`. What kind of effects does it do? It’s probably more aptly named `useSideEffect`, but I suppose naming it this way saves us from writing four extra letters.

The point of running code after render is so that it avoids interfering with browser paint. It’s important that the user interface renders without performance issues. User experience is the consideration here – we want UI to render without stuttering or freezing. There may also be SEO considerations if the paint is especially long; web crawlers may fail to see what you intend.

If you’re coming from React classes, `useEffect` indirectly replaces `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. `useEffect` isn’t a direct translation from these obsolete lifecycle methods, but much of the code from there will be moved to it.

There’s another React hook that is similar called `useLayoutEffect`. You may have heard of it. What’s the deal with this close relative? In short, they do the same thing, except the timing of when it runs is different. It runs after all DOM mutations but before browser paint (instead of after). In certain cases, it will help avoid flickers.

As a general rule, you almost never want to opt for `useLayoutEffect` over `useEffect`. It can cause bugs relating to re-rendering a component based on state changes. It only applies to certain use cases. Those use cases pertain to mutating the DOM or performing DOM/browser measurements. Some libraries may opt to using `useLayoutEffect`. Besides that, just stick to `useEffect`.

So I did mention earlier that `useEffect` will run again if a variable you specify changes. The `useEffect` hook accepts an array of variables as the second argument. Whenever a variable inside this dependency array changes, it will trigger the `useEffect` to run again. If the dependency array is empty, it will run only once. If there’s no dependency array, `useEffect` will run every render (careful about this condition as it may lead to infinite loops).

![useEffect example with dependency array](/images/use-effect-example-2.png)

The `useEffect` clean-up mechanism must be mentioned. Some side effects need to be cleaned up after the component unmounts. The purpose is to avoid memory leaks. Returning a callback function inside `useEffect` gives you a chance to perform the clean-up. This function runs when the component unmounts. This function also runs before the execution of a side effect every time after the first time. An example of a clean-up operation is unsubscribing from a data source.

![useEffect example with clean-up](/images/use-effect-example-3.png)
