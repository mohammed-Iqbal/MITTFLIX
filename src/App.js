import React from 'react';
import {Route} from 'react-router-dom'
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Mylist from './Mylist';
import SearchList from './SearchList';

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

        <Route
          exact
          path="/myList"
          component={Mylist}
        />

        <Route
          exact
          path="/detail/:id"
          component={MovieDetail}
        />

     
      </>
    );
  }
}

export default App;
