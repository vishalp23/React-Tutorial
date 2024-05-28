# React-Tutorial
Repository to learn React.js 

## Hooks

### useState 

#### UseState Component
The UseState component is a simple demonstration of using the `useState` hook in React to manage state within a functional component.

##### Import Statements
The component imports React and the `useState` hook from the React library.

##### State Initialization
The state variable `emotion` is initialized with the value "happy". The `setEmotion` function is used to update the state.

##### Render Method
The component renders a `div` containing a heading and two buttons.
- The heading displays the current emotion.
- The buttons allow the user to change the emotion to "sad" or "excited" by updating the state using the `setEmotion` function.

### useEffect

#### UseEffect Component
The `UseEffect` component demonstrates how to use the `useEffect` hook in React to perform side effects when certain state variables change.

##### Import Statements
The component imports React and the `useState` and `useEffect` hooks from the React library.

##### State Initialization
- The state variable `emotion` is initialized with the value "happy". The `setEmotion` function is used to update the state.
- The state variable `secondary` is initialized with the value "tired". The `setSecondary` function is used to update the state.

##### useEffect Hooks
- **First `useEffect` Hook:**
  - **Purpose:** Runs its effect (the `console.log` statement) whenever the `emotion` or `secondary` state variable changes.
  - **Dependency Array:** The array `[emotion, secondary]` specifies that the effect should re-run whenever either `emotion` or `secondary` changes.
  - **Effect:** Logs the message `It's ${emotion} and ${secondary} around here` to the console when either `emotion` or `secondary` is updated.

- **Second `useEffect` Hook:**
  - **Purpose:** Runs its effect (the `console.log` statement) whenever the `secondary` state variable changes.
  - **Dependency Array:** The array `[secondary]` specifies that the effect should re-run only when `secondary` changes.
  - **Effect:** Logs the message `It's ${secondary} around here` to the console when `secondary` is updated.

##### Render Method
The component renders a `div` containing:
- A heading that displays the current `emotion`.
- Two buttons to change the `emotion` state to "sad" or "excited".
- A subheading that displays the current `secondary` emotion.
- A button to change the `secondary` state to "grateful".
