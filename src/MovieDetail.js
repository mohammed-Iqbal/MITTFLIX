import React from 'react';
import * as MovieAPI from './MovieAPI';
import Header from './header';

class MovieDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      toggled: true,
      movie: {}
    }
  }

  componentDidMount() {
    MovieAPI.getAll()
      .then((movies) => {
        let movie = movies.find(m => m.id == this.props.match.params.id)
        console.log(this.props.match.params.id)
        this.setState({movie: movie})
        this.setState({toggled: movie.my_list});
      })
  }

  addMylist = (add) => {
    if(add) {
      MovieAPI.removeFromList(this.state.movie);
    } else {
      MovieAPI.addToList(this.state.movie);
    }
    this.setState({toggled: !this.state.toggled })
  }

  render() {
    return (
      <>
        <Header history={this.props.history} match={this.props.match}/>
        <div className="details">
          <img
            src={this.state.movie.backdrop_path}
          />
          <div className="details-body">
            <h1>{this.state.movie.title}</h1>
            <div className="details-content">{this.state.movie.overview}</div>
            {this.state.toggled ? (
              <button class="removemylist" onClick={() => this.addMylist(this.state.movie.my_list)}>- Remove from watch list</button>
            ) : (
              <button className="addmylist" onClick={() => this.addMylist(this.state.movie.my_list)}>+ Add to watch list</button>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default MovieDetail;
