import React from 'react';
import {Route, IndexRoute} from 'react-router';


import App from './components/app';
import HomeSection from './components/home/HomeSection';
import CategorySection from './components/categories/CategorySection';
import GroupSection from './components/groups/GroupSection';
import EventSection from './components/events/EventSection';
import PeopleSection from './components/people/PeopleSection';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeSection} />
        <Route path="main" component={CategorySection} />
        <Route path=":id/groups" component={GroupSection} />
        <Route path=":group_name/events" component={EventSection} />
        <Route path=":group_name/events/:event_id" component={PeopleSection} />
    </Route>
);


