import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMovies } from '../../store/actions/MovieAction'
import MovieList from '../../Components/MovieList'

class Search extends Component {

    state = {
        searchInput: '',
        searched: false
    }

    handleInput = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }

    handleSearch = () => {
        let inputContent = this.state.searchInput;
        if (inputContent.length > 0) {
            this.props.searchMovies(this.state.searchInput)
        }
        this.props.searchMovies(this.state.searchInput)
        this.setState({
            searched: true
        })
    }

    handleOutput = () => {
        let searched = this.state.searched;
        let error = this.props.error;
        let isLoading = this.props.isLoading;
        let output = null;

        if (searched) {
            if (isLoading) {
                output = <h1>Waiting information</h1>
            } else {
                if (error) {
                    output = <h1>{this.props.errorMessage}</h1>
                } else {
                    output = <MovieList movies={this.props.movieList} />
                }
            }

        }

        return output
    }

    render() {

        let info = this.handleOutput()

        return (
            <div className="containe-fluid">

                <input className=" w-50 m-auto d-flex " type="text" placeholder="Search a movie..." onChange={this.handleInput} />
                <button className=" w-50  btn btn-block m-auto bg-light" onClick={this.handleSearch} > Search </button>
                <div className=" w-50 m-auto d-flex ">
                    {info}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movieList: state.movies.movieList,
    isLoading: state.movies.isLoading,
    error: state.movies.error,
    errorMessage: state.movies.errorMessage
})

const mapDispatchToProps = (dispatch) => ({
    searchMovies: (query) => dispatch(searchMovies(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)