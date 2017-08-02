import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './Components/Home';
import About from './Components/About';
import FAQ from './Components/FAQ';
import Contact from './Components/Contact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/faq" component={FAQ} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
            </BrowserRouter>,
        document.getElementById('root'));
registerServiceWorker();
