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

#### Example Output
- ![happy](https://github.com/vishalp23/React-Tutorial/assets/130540128/2749577f-2343-41d0-b757-2723009f74f0)
- ![excited](https://github.com/vishalp23/React-Tutorial/assets/130540128/8eb337ec-5422-4610-ace5-55318812b637)
- ![sad](https://github.com/vishalp23/React-Tutorial/assets/130540128/40a323e2-55dc-4ec9-afc3-5b7f624b7e3c)

The above three images show the change of state from happy (default) to excited to sad state.

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
  - **Purpose:** Runs its effect (the `console.log` statement) whenever the `emotion` state variable changes.
  - **Dependency Array:** The array `[emotion]` specifies that the effect should re-run only when `emotion` changes.
  - **Effect:** Logs the message `It's ${emotion} around here` to the console when `emotion` is updated.

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


