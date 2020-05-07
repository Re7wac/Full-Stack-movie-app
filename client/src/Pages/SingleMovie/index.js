import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from "react-router-dom"
import { getMovieInfo } from "../../store/actions/MovieAction"
class SingleMovie extends Component {

    state = {
        movieID: this.props.match.params.id
    }

    componentDidMount = () => {
        this.props.getMovieInfo(this.state.movieID)
    }

    handleContent = () => {
        let isLoading = this.props.isLoading;
        let movieInfo = this.props.selectedMovie;
        let error = this.props.error;
        let errorMessage = this.props.errorMessage

        let content = null;
        if (isLoading) {
            content = <h1>Waitting for infornation</h1>
        } else {
            if (error) {
                content = <h1>{errorMessage}</h1>
            } else {
                if (typeof movieInfo.Title !== "undefined") {
                    console.log('here')
                    content =
                        <div>
                            <img src={movieInfo.Poster} alt={movieInfo.Title} />
                            <h3> {movieInfo.Title} </h3>
                            <p> {movieInfo.Plot} </p>
                            <Link to="/create-review">Create for this movie</Link>
                        </div>
                }
            }
        }
        return content
    }
    render() {
        let content = this.handleContent()
        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedMovie: state.movies.selectedMovie,
    isLoading: state.movies.isLoading,
    error: state.movies.error,
    errorMessage: state.movies.errorMessage
})

const mapDispatchToProps = (dispatch) => ({
    getMovieInfo: (movieID) => dispatch(getMovieInfo(movieID))
})

const WRsingleMovie = withRouter(SingleMovie)

export default connect(mapStateToProps, mapDispatchToProps)(WRsingleMovie)