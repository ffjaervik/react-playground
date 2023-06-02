useContext is a hook that allows you to pass data from a parent component to a child component. It is similar to props, but is designed for more complex data that needs to be accessed by many components at different nesting levels.
For example, consider a React app that has a context of a user, which includes information such as the user's name, email, and age. This context can be passed down through the component tree, allowing any component to access the data without needing to pass props manually.

The official documentation can be found at https://react.dev/reference/react/useContext

This is a simple step by step guide to using the useContext hook.
#1 If it is a state that is nested in a child or grandchild component, move it up to its parent component.
#2 On the parent component.
-- Import the createContext API and useContext hook from react.
-- Create and export a context object using the createContext API.
```javascript
      export const Context = createContext();
```
-- Wrap the child component in the context provider.
--The context provider takes a value prop, which is the data that will be passed down to the child component. In our example it is the state of signedIn and the function setSignedIn.
```javascript
    <Context.Provider value={[signedIn, setSignedIn]}> 
```
#3 In the child component that wants to make use of the context/state.
-- Import the context object from the parent component.
-- Import the useContext hook from react.
-- rather than using useState, use useContext to access the state and setState function.

```javascript
   const [signedIn, setSignedIn] = useContext(Context);
```
-- Now you can use the state and setState function as you would normally.




