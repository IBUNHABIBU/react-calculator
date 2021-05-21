import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import App from './App';
import Quote from './Quote';
import Footer from './Footer';

const Routes = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Calculator' component={App} />
              <Route exact path='/Quotes' component={Quote} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Routes
