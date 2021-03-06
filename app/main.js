import { Header, GameBoard, Dashboard, GameList, Type, Home, Login, Chat, Signup, Pregame } from './components'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from './store/reducers'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import React from 'react'
import './main.styl'
const store = createStore(combineReducers(reducers), composeWithDevTools(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/gameboard' component={GameBoard} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/gamelist' component={GameList} />
        <Route exact path='/type' component={Type} />
        <Route exact path='/chat' component={Chat} />
        <Route exact path='/pregame' component={Pregame} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
