import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { AdmonParking } from './pages/AdmonParking'
import { NotFound } from './pages/NotFound'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {


  render(){

    const url = new URL(document.location)

    return(
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admonParking/' component={AdmonParking} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
