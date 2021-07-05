import React from 'react';
import * as MovieAPI from './MovieAPI';
import {Link} from 'react-router-dom'


class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      toggled: true,
    }
  }

  //mounting property 
  componentDidMount() {
    this.setState({toggled: this.props.movie.my_list});
  }

  //calling data from api using await funtions.
  addMylist = async (add) => {
    if(add) {
      await MovieAPI.removeFromList(this.props.movie);
    } else {
      await MovieAPI.addToList(this.props.movie);
    }
    this.setState({toggled: !this.state.toggled })
    if(this.props.reload){
      await this.props.reload();
    }
  }

  //showing movie data in homepage as poster.
  //data are patching from local server.
  render() {
    return (
      <div className="movie">
        <img
          src={this.props.movie.poster_path}
        />
        <div className="overlay">
          <div className="title">{this.props.movie.title}</div>
          <div className="rating">{this.props.movie.vote_average}/10</div>
          <div className="plot">
            {this.props.movie.overview}
          </div>
        </div>
        <div data-toggled={this.state.toggled} onClick={() => this.addMylist(this.state.toggled)} className="listToggle">
          <div>
            <i className="fa fa-fw fa-plus"></i>
            <i className="fa fa-fw fa-check"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
