import React from 'react';
import { Router } from '@reach/router';
import WorkDetail from './work/WorkDetail';
import NotFoundPage from './404';

const Work = () => (
  <Router>
    <NotFoundPage path="/work" />
    <WorkDetail path="/work/:id" />
  </Router>
);

export default Work;
