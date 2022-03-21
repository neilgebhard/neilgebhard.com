---
title: "Redux: A Simple Guide"
date: "2022-03-19"
---

This guide is designed to be a stripped down introduction to Redux. There are many layers to this library and it's easy to get overwhelmed with it all at the beginning.

First, Redux is a standalone library. It can be used with any UI layer or framework (such as React). It’s primary purpose is to be a state management tool. It gives you a way to have state that is available to your entire application. It also allows you to abstract logic away from your components.

The recommended way of using Redux nowadays is with [Redux Toolkit](https://redux-toolkit.js.org/). It removes a ton of boilerplate. You can get started with the [preconfigured template app](https://redux-toolkit.js.org/introduction/getting-started).

Redux has two main parts: the **slice** and the **store**. The slice declares your state and reducer functions. The store holds your slice and makes it available to your components.

You put the logic that mutates the state in your reducer functions. Reducer functions are accessed through **actions**. Actions are dispatched to the store in your event handlers. When the state is mutated, components subscribed to the store re-render with the new state.

Note: reducer functions are functions that take in the current state and return a new state. You may pass data into reducer functions from your event handlers.

A slice provides you with an interface for changing the state. It accepts a set of reducer functions and an initial state value. Here's an example using a Todo App.

```tsx
export const todoSlice = createSlice({
  name: "todo",
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      const text = action.payload;
      const newTodo = {
        id: uuid(),
        text,
      };

      state.tasks.push(newTodo);
    },
    removeTask: (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
});
```

Here, we can see that a slice is made called `todoSlice` with a name of `todo`. The initial state is an object with an array of tasks: `{ tasks: [] }`. There are 2 reducer functions: `addTask` and `removeTask`.

The store holds all your reducer functions. They are passed into the `Provider` allowing them to be available throughout your app.

```js
export const store = configureStore({
  reducer: { todo },
});
```

```jsx
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

Then, we have our Todo component. This is just normal React. We can see how actions are dispatched to access the reducer functions in our slice.

```jsx
// src/features/todo/Todo.jsx

export default function Todo() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => dispatch(removeTask(task.id))}>
            {task.text}
          </li>
        ))}
      </ul>
    </>
  );
}
```

Tasks are accessed using the `useSelector` hook. The dispatch function is accessed using the `useDispatch` hook. A reference to the reducer function is passed into the dispatch function to change the state.

Check out [the repo](https://github.com/neilgebhard/redux-todo-app) to see all the code for this todo app. It's in TypeScript to give you more verbosity.
