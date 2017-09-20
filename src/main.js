import React from 'react'
import {createStore} from 'redux'
import {ReactDOM, render} from 'react-dom'
import App from './App.jsx'
import todoApp from './reducers/index.js'
import Provider from 'react-redux'

console.log("main start")

let store = createStore(todoApp)
console.log("todoapp", todoApp)
console.log("store", store)

// ReactDOM.render(
// 	//<Provider store={store}>
// 	<App />
// 	//</Provider>
// 	, document.getElementById('app'))

// console.log("main end")

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)