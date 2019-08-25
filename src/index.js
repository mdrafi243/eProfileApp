import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux"

import configureStore from './store/store'
import Profile from './components/profile/Profile';
import CompnayOrders from './components/profile/CompnayOrders';
import Product from './components/product/Product'
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={Profile} />
                        <Route exact path="/companyOrders/:id" component={CompnayOrders} />
                        <Route exact path="/product" component={Product} />
                        <Route render={()=> {
                            return (
                                <span>
                                    <h1>NOT FOUND</h1>
                                    The requested Page does not exist
                                </span>
                            )
                        }} />
                    </Switch>
                </App>
            </BrowserRouter>
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
