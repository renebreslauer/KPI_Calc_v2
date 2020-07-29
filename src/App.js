import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  VerticalContainer,
  HorizontalContainer,
  Retention,
  Growth,
  Home,
} from './pages/index'
import { UpperNav, LowerNav } from './components/index'

function App() {
  return (
    <>
      <Router>
        <UpperNav />
        <Switch>
          <Route path="/Growth" component={HorizontalContainer}></Route>
          <Route path="/Retention" component={HorizontalContainer}></Route>
          <Route exact path="/" component={HorizontalContainer}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
