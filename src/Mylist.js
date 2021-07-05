import React from 'react';
import * as MovieAPI from './MovieAPI';
import Header from './header';
import MovieItem from './MovieItem';

//Implementing my list funtions.
class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  //mounting data from api.
  componentDidMount() {
    MovieAPI.getAll()
      .then((movies) => {
        this.setState({movies: movies});
      })
  }

  reload = () => {
    MovieAPI.getAll()
      .then((movies) => {
        this.setState({movies: movies});
      })
  }

  //saving my list data in local server.
  render() {
    return (
      <>
        <Header history={this.props.history} match={this.props.match}/>

        <div className="titleList">
          <div className="title">
            <h1>My List</h1>
            <div className="titles-wrapper">
              {this.state.movies.filter(m => m.my_list == true).map((movie) => (
                <MovieItem key={movie.id} movie = {movie} reload={this.reload}/>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MovieList;
