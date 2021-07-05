import React from 'react';
import {Route, Switch,Router} from 'react-router-dom'
import MovieList from './MovieList';
import Mylist from './Mylist';
import SearchList from './SearchList';
import * as MovieAPI from './MovieAPI';


// Implement routing
class App extends React.Component {
  render = () => {
    return (
      <>
      <Switch>
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
          path="/search/:key"
          component={SearchList}
        />

        <Route
          exact
          path="/search"
          component={SearchList}
        />
      </Switch>

{/*     
        <Router>
          <Switch>
            <Route path="/" exact Component={MovieList}/>
            <Route path="/myList" exact Component={Mylist}/>
            <Route path="/search/:key" exact Component={SearchList}/>
            <Route path="/search" exact Component={SearchList}/>

          </Switch>
        </Router>
       */}

      </>
     
    );
  }
}

export default App;
