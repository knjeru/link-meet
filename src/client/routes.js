import React from 'react';
import {Route, IndexRoute } from 'react-router';

import App from './components/app';

import HomeSection from './components/home/HomeSection';
import CategorySection from './components/categories/CategorySection';
// import GroupSection from './components/groups/GroupSection';
// import EventSection from './components/events/EventSection';
// import PeopleSection from './components/people/PeopleSection';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeSection} />
        <Route path="/register" component={RegisterSection} />
        <Route path="/login" component={LoginSection} />
        <Route path="/main" component={CategorySection} />
        <Route path="/main/:id/groups" component={GroupSection} />
        <Route path="/main/:id/groups/:name" component={EventSection} />
        <Route path="/main/:id/groups/:name/:event_id" component={PeopleSection} />
    </Route>
);

