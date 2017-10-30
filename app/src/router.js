import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Workouts from './components/Workouts/Workouts';
import List from './components/List/List';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/workouts" render={() => {
            return (
                <Workouts>
                    <Switch>
                        <Route path='/workouts/list' component={List} />
                    </Switch>
                </Workouts>
            )
        }} />
    </Switch>
)