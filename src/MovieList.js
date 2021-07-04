import React from 'react';
import * as MovieAPI from './MovieAPI';

class MovieList extends React.Component {
    constructor() {
      super();
      this.state = {
        genres: [],
        movies: []
      }
    }
  
    componentDidMount() {
      this.getData();
    }
}