---
title: "React: Memoization"
date: "2022-02-15"
---

Most of the time, having a component re-render is completely fine. The React engine is efficient. React’s reconciliation algorithm, the algorithm which determines updates to the DOM, is done in memory so it's relatively lightweight. However, if your app is noticeably suffering from performance issues, you may want to adjust the way your components render.

First, let’s see **what makes a component re-render**. A component re-renders when:

1. Its parent re-renders
2. Its state changes
3. Its props changes
4. It's a descendant of a Provider and its value prop of the Provider changes

Great. Now we know what makes a component re-render. But, there may be times when we want to prevent re-renders or, at least, handle them better. What are the ways we can go about doing that? There are three main React mechanisms to take into consideration: `React.memo`, `useMemo`, and `useCallback`.

An important concept in understanding rendering performance in React is memoization. **Memoization** is a technique for handling expensive calculations executed in function calls. The way memoization works is the result of the function gets “cached” or stored. Then, if the function is called again with the same inputs, the cached result is returned. This avoids having the function to re-execute an expensive calculation when the function's output is already known.

One way to use memoization in React is through `React.memo`. This is a higher order component, a function that takes a component as an argument and returns a component. In short, it wraps the component in logic. What it does is it prevents the component from rendering if its props remain the same. It’s important to note that it still re-renders if its state or context changes. Its sole purpose is performance optimization.

![Example of useMemo](/images/memo-example-1.png)

`React.memo` is worthwhile to use if the extra work of comparing the old and new props is cheaper than re-rendering the component. In most cases, it’s not needed. Remember that performance optimizations always have a tradeoff, otherwise it would be the default. Use this tool if a component is noticeably having poor performance. Otherwise, it is recommended to omit it.

If a component is passed a function as props, it will always re-render despite wrapping it in `React.memo`. The reason is that the function is re-declared every render. Therefore, the props always change because the old and new functions are being compared. Remember that JavaScript compares functions by reference. In other words, it’s a shallow comparison.

The solution to this problem is to wrap the function with `useCallback`. `useCallback` memoizes the function. Another way to put it is that the variable storing the function maintains the reference to the same function across renders. Hence, the function being passed as a prop maintains referential equality, preventing the re-render with `React.memo`.

![Example of useCallback](/images/memo-example-2.png)

If you simply have an expensive calculation being done inside a component, preventing renders is not really an option. What you can do is wrap the function with `useMemo`. This React hook memoizes the value of what’s being returned in the function call.

![Example of useMemo](/images/memo-example-3.png)

**Boiling all this down, use `React.memo` when:**

1. The props rarely change
2. The component renders often
3. The component contains many UI elements (This may cause React’s reconciliation algorithm to be expensive)

**Don’t use `React.memo` when:**

1. The props often change anyway
2. The component has relatively few UI elements

In many cases, it’s not needed to use any of these techniques at all. When in doubt, avoid using `React.memo` until performance issues become noticeable. If you are suspicious of a component’s performance, do some measurements first, add memoization, then measure again. Check out the **[Profiler in React DevTools](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler)** to perform some these measurements.

Happy memoizing!
