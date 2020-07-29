import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { VerticalContainer, HorizontalContainer } from './pages/index'
import { UpperNav, LowerNav } from './components/index'


function App() {
  return (
  <>
  <Router>
  <UpperNav />
    <Switch>
      <Route exact path="/">
        <HorizontalContainer />
      </Route>
    </Switch>
  </Router>
  </>
  )
}

export default App;
