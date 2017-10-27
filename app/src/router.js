import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './src/components/Home/Home';
import Header from './src/components/Header/Header';
import Workouts from './src/components/Workouts/Workouts';



export default (
    <Switch>
        <Route exact path ="/" component={Home} />
        <Route path ="/header" component={Header} />
        <Route path='/workouts' component={Workouts} />
    </Switch>
)