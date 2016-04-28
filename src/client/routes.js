import React from 'react';
import {Route, IndexRoute} from 'react-router';


import protectedRoutes from './components/auth_HOC/require_auth'
import App from './components/app';
import HomeSection from './components/home/HomeSection';
import CategorySection from './components/categories/CategorySection';
import GroupSection from './components/groups/GroupSection';
import EventSection from './components/events/EventSection';
import PeopleSection from './components/people/PeopleSection';
import RegisterForm from './components/register/RegisterForm';
import LoginForm from './components/login-signout/LoginForm';
import SignOutSection from './components/login-signout/SignOutSection';
import PersonSection from './components/personcard/PersonSection';


export default (
  <Route path="/" component={App}>
          <IndexRoute component={HomeSection} />
          <Route path="main" component={protectedRoutes(CategorySection)} />
          <Route path="register" component={RegisterForm}/>
          <Route path="login" component={LoginForm} />
          <Route path="signout" component={protectedRoutes(SignOutSection)} />
          <Route path=":id/groups" component={protectedRoutes(GroupSection)} />
          <Route path=":group_name/events" component={protectedRoutes(EventSection)} />
          <Route path=":group_name/events/:event_id" component={protectedRoutes(PeopleSection)} />
          <Route path=":group_name/events/:event_id/:person_id" component={protectedRoutes(PersonSection)} />
  </Route>
);


