import React from 'react';
import * as MovieAPI from './MovieAPI';

class MovieDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    }
  }

  componentDidMount() {
    MovieAPI.getAll()
      .then((movies) => {
        let movie = movies.find(m => m.id === this.props.match.params.id)
        console.log(movie)
        this.setState({movie: movie})
      })
  }

  addMylist = (add) => {
    if(add) {
      MovieAPI.removeFromList(this.state.movie);
    } else {
      MovieAPI.addToList(this.state.movie);
    }
  }

  render() {
    console.log(this.state.movie)
    return (
      <div className="movie">
        {/*<a href={"/detail/"+this.state.movie.id}>
          <img
            src={this.state.movie.poster_path}
          />
          <div className="overlay">
            <div className="title">Ant-Man</div>
            <div className="rating">7.1/10</div>
            <div className="plot">
              {this.state.movie.overview}
            </div>
          </div>
        </a>
        <div data-toggled={this.state.movie.my_list} onClick={() => this.addMylist(this.state.movie.my_list)} className="listToggle">
          <div>
            <i className="fa fa-fw fa-plus"></i
            ><i className="fa fa-fw fa-check"></i>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default MovieDetail;
