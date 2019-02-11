import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/layout/Header';
import NotFound from './components/pages/NotFound';
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
    <Provider store = {store}>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
           
              {/* <Route exact path="/contact/edit/:id" component={EditContact} /> */}
             
              
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
