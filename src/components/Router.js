import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage/index';
import DetailsPage from '../pages/DetailsPage/index';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/room/:roomId" component={DetailsPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
