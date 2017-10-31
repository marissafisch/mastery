import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Workouts from './components/Workouts/Workouts';
import Functional_View from './components/Functional_View/Functional_View';


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/workouts" component={Workouts} />
        <Route path="/functional_view" component={Functional_View} />
        
        }} />
    </Switch>
)