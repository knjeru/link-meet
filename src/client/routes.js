import React from 'react';
import {Route, IndexRoute} from 'react-router';


import App from './components/app';
import HomeSection from './components/home/HomeSection';
import CategorySection from './components/categories/CategorySection';
import GroupSection from './components/groups/GroupSection';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeSection} />
        <Route path="main" component={CategorySection} />
        <Route path=":id/groups" component={GroupSection} />
    </Route>
);

// import EventSection from './components/events/EventSection';
// import PeopleSection from './components/people/PeopleSection';

// <Route path="/register" component={RegisterSection} />

// <Route path="/login" component={LoginSection} />

// <Route path="groups/:name" component={EventSection} />

// <Route path="groups/:name/:event_id" component={PeopleSection} />