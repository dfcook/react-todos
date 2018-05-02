This project is an attempt to illustrate different methods of managing application state in React as of version 16.3

It is a canonical todos application which uses a backend from [todobackend](https://www.todobackend.com/) to persist todos and state. It also uses antd as a component library.

I have organised each method into its own branch.

## Table of Contents

- [Local State](#local-state)
- [Redux with redux-thunk](#redux-thunk)
- [Redux with redux-observable](#redux-observable)
- [Redux with redux-saga](#redux-saga)
- [Mobx](#mobx)
- [React Context](#react-context)


## Local State

Local state is in the [master](https://github.com/dfcook/react-todos) branch and is the simplest out of the box solution with React.
Application state is held in a top-level component (App), is updated with calls to setState and passed to sub-components using props.

## Redux with redux-thunk

This is in the [redux-thunk](https://github.com/dfcook/react-todos/tree/redux-thunk) branch, it uses a Redux store to track state, probably the most popular of the state management solutions for React.

redux-thunk is used to allow actions to return promises that dispatch state updates once they resolve.

## Redux with redux-observable

From the [redux-observable](https://github.com/dfcook/react-todos/tree/redux-observable) branch, this uses [Rxjs](http://reactivex.io/rxjs/) via [redux-observable](https://redux-observable.js.org/) to make actions epic!

## Redux with redux-saga

[Redux-saga](https://redux-saga.js.org/) uses the power of ES6 generators to make side effects like remote api data fetching easier to manage.

See the [redux-saga](https://github.com/dfcook/react-todos/tree/redux-saga) branch.

## Mobx

In the [mobx](https://github.com/dfcook/react-todos/tree/mobx) branch we take a break from redux and use an entirely different library - [Mobx](https://mobx.js.org/).

Mobx is very different to redux in that the state is mutable and changes are propagated by observing parts of it.

## React Context

Finally, version 16.3 of React brought a re-implementation of the Context API which had previously been marked as experimental and unstable. The [react-context](https://github.com/dfcook/react-todos/tree/react-context) branch shows how it can be used to remove the need to pass props down through multiple levels of the application tree.