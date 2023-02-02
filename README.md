# React Redux Tutorial

This repo exists to demonstrate the basic use of Redux within a React application

[Useful concepts and UML Freehand](https://projects.invisionapp.com/freehand/document/ezo00sYNO)

## Prebuilt Features:

- Student facing help venue where students have existing tickets in state, rendered, and showing in the student area.  
- tickets can be removed from state, triggering a rerender that shows they are no longer in state nor rendered to the page.
- browser router implementation exists that allows us to see both the student area and the TA area.
- A TA component exists, but we cannot view the Student component state (tickets) here.  we want global state, aka Redux, to provide that global state to both components.

### Feature One:

- `npm i redux react-redux @redux-devtools/extension`
- create a redux store
- create a ticket reducer with initial state
- functionality to remove a ticket from redux state
- wire it all up to our class component React app

### Feature Two:

- refactor React class component to functional component
- utilize the `useState()` hook when adding a ticket
- add a ticket to the redux store
  - add case to the reducer
  - add action
  - use redux hooks in function components
  - dispatch action from function component
