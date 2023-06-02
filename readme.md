useRef is a React Hook that lets you reference a value that’s not needed for rendering.
In other words it keeps track of a value between re-renders of a component.
```javascript
const someRef = useRef(initialValue)
```
The useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
```javascript
const someRef = useRef(13)
console.log(someRef.current) // 13
```

Check out App.jsx for a simple example of useRef.

