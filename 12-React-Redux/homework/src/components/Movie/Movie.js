import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id);
    }
    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula  
                <h3>{this.props.movie.Title}</h3>
                <p>{this.props.movie.Genre}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail
    };
  }
  
  export default connect(
    mapStateToProps,
    {getMovieDetail}
  )(Movie);
  