import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
       <Navbar/>
       <Switch>
          <Route exact path="/"><News key="general" country="in" category="general" /></Route>
          <Route exact path="/sports"><News key="sports" country="in" category="sports"/></Route>
          <Route exact path="/business"><News key="business" country="in" category="business"/></Route>
          <Route exact path="/technology"><News key="technology" country="in" category="technology"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" country="in" category="entertainment"/></Route>
          <Route exact path="/helth"><News key="helth" country="in" category="helths"/></Route>
          <Route exact path="/science"><News key="science" country="in" category="science"/></Route>
          <Route exact path="/in"><News key="in" country="in" category="general" /></Route>
          <Route exact path="/in/general"><News key="in/general" country="in" category="general" /></Route>
          <Route exact path="/in/sports"><News key="in/sports" country="in" category="sports"/></Route>
          <Route exact path="/in/business"><News key="in/business" country="in" category="business"/></Route>
          <Route exact path="/in/technology"><News key="in/technology" country="in" category="technology"/></Route>
          <Route exact path="/in/entertainment"><News key="in/entertainment" country="in" category="entertainment"/></Route>
          <Route exact path="/in/helth"><News key="in/helth" country="in" category="helth"/></Route>
          <Route exact path="/in/science"><News key="in/science" country="in" category="science"/></Route>
          <Route exact path="/us"><News key="us" country="us" category="general" /></Route>
          <Route exact path="/us/general"><News key="us/general" country="us" category="general" /></Route>
          <Route exact path="/us/sports"><News key="us/sports" country="us" category="sports"/></Route>
          <Route exact path="/us/business"><News key="us/business" country="us" category="business"/></Route>
          <Route exact path="/us/technology"><News key="us/technology" country="us" category="technology"/></Route>
          <Route exact path="/us/entertainment"><News key="us/entertainment" country="us" category="entertainment"/></Route>
          <Route exact path="/us/helth"><News key="us/helth" country="us" category="helth"/></Route>
          <Route exact path="/us/science"><News key="us/science" country="us" category="science"/></Route>
        </Switch>
      </div>
      </Router>
    )
  }
}
