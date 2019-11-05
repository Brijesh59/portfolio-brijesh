import React, {Component} from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from 'react-router-dom';

import About from './components/About';
import AppBar from './components/AppBar'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import AppBar2 from './components/AppBar2';

class App extends Component {
  state = { 
    route: null
  }
  onRouteChanged = route => {
    console.log("ROUTE CHANGED: ", route);
    this.setState({
      route
    })
  }
  render() {
    return ( 
      <React.Fragment>
        <Router>
          {window.location.pathname !== '/' ? <AppBar2 /> : null}
          <Switch>
            <Route exact path="/">
              <About onRouteChanged = {this.onRouteChanged}/>
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            {/* <Route exact path="/resume">
              <Resume />
            </Route> */}
            <Route exact path="/resume" component={() => { 
              window.open("https://firebasestorage.googleapis.com/v0/b/node-demo-project-9e66c.appspot.com/o/Resume.pdf?alt=media&token=78f49521-84c0-4150-8930-f76fa1f93089", "_blank", 
              "toolbar=no,scrollbars=yes,resizable=yes,top=100,left=200,width=800,height=700");
              console.log(localStorage.getItem('previousURL'))
              return <Redirect to={localStorage.getItem('previousURL')} />;
              }}/>
              <Redirect to="/" /> 
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}


export default withRouter(App);