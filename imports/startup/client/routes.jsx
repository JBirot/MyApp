import React from 'react';
import { render } from 'react-dom';
import { Router,Route,IndexRoute,browserHistory } from 'react-router';

import { App } from '/imports/ui/layouts/app.jsx';
import { Index } from '/imports/ui/components/index.jsx';
import { PageNotFound } from '/imports/ui/pages/pageNotFound.jsx';

Meteor.startup( () => {
    render(
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Index } />
                <Route path="/one" component={ Index } />
                <Route path="/two" component={ Index } />
            </Route>
            <Route path='*' component={PageNotFound}/>
        </Router>,
        document.getElementById( 'root' )
    );
});