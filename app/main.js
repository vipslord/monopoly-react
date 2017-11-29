import { HashRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Home from './components/Home/Home.jsx'
import ReactDOM from 'react-dom'
import React from 'react'
import './main.styl'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/dashboard' component={Dashboard} />
    </div>
  </Router>,
  document.getElementById('root')
)