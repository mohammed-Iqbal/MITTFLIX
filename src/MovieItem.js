import React from 'react';
import * as MovieAPI from './MovieAPI';

class MovieItem extends React.Component {

  addMylist = (add) => {
    if(add) {
      MovieAPI.removeFromList(this.props.movie);
    } else {
      MovieAPI.addToList(this.props.movie);
    }
  }

  render() {
    return (
      <div className="movie">
        <a href={"/detail/"+this.props.movie.id}>
          <img
            src={this.props.movie.poster_path}
          />
          <div className="overlay">
            <div className="title">Ant-Man</div>
            <div className="rating">7.1/10</div>
            <div className="plot">
              {this.props.movie.overview}
            </div>
          </div>
        </a>
        <div data-toggled={this.props.movie.my_list} onClick={() => this.addMylist(this.props.movie.my_list)} className="listToggle">
          <div>
            <i className="fa fa-fw fa-plus"></i
            ><i className="fa fa-fw fa-check"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
