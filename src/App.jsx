import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import Login from './Components/Login'
import { auth } from './firebase'
import { useStateValue } from './Container/StateProvider'

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('USER IS >>> ', authUser)

      if (authUser) {
        // THE USER IS LOOGED IN / WAS LOGGED IN
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // THE USER IS LOGED OUT
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
