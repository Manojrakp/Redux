RoadMap form the Scratch
---
 Setting Up Redux in Node.js  
To get started with Redux in a Node.js environment, follow these steps:  

1. Verify Node.js Installation: Ensure Node.js is installed by running `node -v` and `npm -v` in the command prompt.  
2. Create a New Folder: Make a directory for your project and navigate into it.  
3. Initialize a Node.js Project: Run `npm init --yes` in the command prompt to create a `package.json` file.  
4. Install Redux: Use `npm i redux` to install Redux as a dependency.  
5. Create an `index.js` File: This is where you will write the Redux logic.  

---

 3 Core Concepts of Redux  

1. Store – The centralized place where the application's state is safely held.  
2. Action – A plain JavaScript object describing what happened in the application.  
3. Reducer – A function that ties the store and actions together, determining how the state should change based on the dispatched action.  

---

 3 Fundamental Principles of Redux  

1. Single Source of Truth: The entire global state of the application is stored as an object inside a single Redux store. For example, in a cake shop, the state might be `{ numOfCakes: 20 }`.  
2. State is Read-Only: The only way to change the state is by dispatching an action, which describes what happened. You cannot modify the state directly. For instance, in a cake shop, a customer scans a QR code and places an order, which triggers an action to update the state.  
3. Pure Reducers Determine State Changes: A reducer is a pure function that takes the previous state and an action, then returns a new state. The formula for a reducer is:  
   ```
   reducer(previousState, action) => newState
   ```  
   Reducers ensure the state changes predictably based on the actions dispatched.  

By following these principles, Redux maintains a predictable and structured way to manage state in applications.
