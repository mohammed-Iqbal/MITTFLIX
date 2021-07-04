import React from 'react';
import {Route} from 'react-router-dom'
import MovieList from './MovieList';

import * as MovieAPI from './MovieAPI';

class App extends React.Component {
  render = () => {
    return (
      <>
        <Route
          exact
          path="/"
          component={MovieList}
        />
      </>
    );
  }
}

export default App;