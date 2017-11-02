import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Workouts from './components/Workouts/Workouts';
import Functional_View from './components/Functional_View/Functional_View';
import Stuff from './components/Stuff/Stuff';
import Nested_View from './components/Nested_View/Nested_View';


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/workouts" component={Workouts} />
        <Route path='/stuff/:name' component={Stuff}/>
        <Route path="/functional_view" component={Functional_View} />
        <Route path="/functional_view" render={() => {
            return (
                <Functional_View>
                    <Switch>
                        <Route path='/functional_view/nested' component={Nested_View} />
                    </Switch>
                </Functional_View>
            )
        }} />
    </Switch>
)