---
title: "React: Context vs Redux"
date: "2022-02-24"
tags: ["JS", "React"]
---

In React, you may need to share data through your entire app. Two common tools used to accomplish this task are React Context and Redux. Which one should you use? Is one better than the other? Let’s dive into this dilemma.

They’re both quite similar. Components consume them by subscribing to their data store. Once data changes, it triggers a re-render to the component.

## Redux

Redux is a standalone library. It can be used with any UI layer or framework such as React. Components subscribed to the Redux store will only re-render if its state changed. It’s a state management tool; state is built into the library and allows for state logic to be abstracted away from components.

The way it works is that changes to the state are made through actions. Actions are objects describing what happened. Actions are dispatched to the store usually in event handlers. To specify how the state gets updated, you write a reducer function that calculates a new state based on the old state and action.

## Context

Context provides a way to pass data through the component tree. It allows data to be accessible by any component that’s a descendant of a Provider. It was created to solve the problem of prop-drilling. It’s not a pure state management tool; you still need to use something like useState or useReducer to store data.

## Performance

In React, it’s desirable to skip unnecessary renders when data remains the same. Rendering a component with the same data has the same output, so it’s unneeded.

In React Context, whenever a change is made to state, it prompts a re-render for all components that are descendants of its Provider. However in Redux, it only re-renders components which subscribe to a slice of state that changed. Redux is more performant by only rendering components that need to be re-rendered.

**Benefits of React Context:**

1. Built in with React so bundle size is smaller
2. Promotes the idea of co-locating state with component, minimizing app-wide data
3. Minimal setup, no reliance on a third party library
4. Better when app-wide data rarely changes
5. Better for small applications
6. Complexity is less

**Benefits of Redux:**

1. More efficient renders, so changes to data are more performant
2. More scalable, data store is more extendible
3. More accommodating to high frequency of changes to state
4. Better for large applications

## Conclusion

One does not necessarily replace the other. They’re effective in different use cases. Redux is better at separating the state logic and UI layer. It’s also more performant when it comes to frequently changing state. Context is better for smaller apps with minimal app-wide data.
