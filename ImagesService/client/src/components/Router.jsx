import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Images from './Images';

class ImagesRouter extends React.Component {
  render() {
    return (
      <Router>
          <div>
            <Switch>
              <Route path="/:id" component={Images} />
            </Switch>
          </div>
      </Router>
    )
  }
}

export default ImagesRouter;