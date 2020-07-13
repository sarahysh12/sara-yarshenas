import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Landing from './containers/Landing/Landing';
import Experience from './containers/Experience/Experience';
import Skills from './containers/Skills/Skills';
import Projects from './containers/Projects/Projects';
import Arts from './containers/Arts/Arts';
import AboutMe from './containers/AboutMe/AboutMe';

class App extends Component {
  
  render() {
    let routes = (
      <Switch>
        <Route path="/experience" component={Experience} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/arts" component={Arts} />
        <Route path="/aboutme" component={AboutMe} />
        <Route exact path="/" component={Landing} />
      </Switch>
    );

    return (
        <div className="App">
            {routes}
        </div>
    );
  }
}

export default App;
