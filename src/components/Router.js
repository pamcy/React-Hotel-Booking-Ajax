import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GithubCorner from 'react-github-corner';

import MainPage from '../pages/MainPage/index';
import DetailsPage from '../pages/DetailsPage/index';
import ScrollToTop from './ScrollToTop';

const Router = () => (
  <>
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/room/:roomId" component={DetailsPage} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
    <GithubCorner
      style={{ position: 'fixed', top: 0, right: 0, zIndex: 1 }}
      direction="right"
      href="https://github.com/pamcy/React-Hotel-Booking-Ajax"
      target="_blank"
    />
  </>
);

export default Router;
