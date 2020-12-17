
import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GlozzomNavbar from './components/navbar/GlozzomNavbar'
import Home from './components/home-section/Home.jsx'

import Footer from './components/footer/Footer.jsx'
import About from './components/about-section/About'
import Services from './components/service-section/Services'
import Blog from './components/Blog'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlozzomNavbar/>
        <Switch exact>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/about' component = {About}/>
          <Route path = '/services' component = {Services}/>
          <Route path = '/blog' component = {Blog}/>
          <Route path = '/contact' component = {Contact}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App

