// App.js

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Offerings from './Offerings'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/welcome' exact Components={Welcome} />
          <Route path='/offerings' component={Offerings} />
          <Route path='/contact' component={Contact} />
          <Route path='/about-us' component={About} />
          <Route path='/navbar' component={Navbar} />
          <Route path='/footer' component={Footer} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
