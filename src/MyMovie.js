import React, { Component } from 'react'

class MyMovie extends Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url
    }
    render() {
        return (
            <table key={this.props.movie.id}>
                <tbody>
                    <tr>
                        <td> <img src={this.props.movie.poster_src} width="120" alt="poster"/></td>
                        <td> <h3>{this.props.movie.title}</h3>
                            <p>{this.props.movie.overview}</p>
                            <input type="button" className="viewBtn" onClick={this.viewMovie.bind(this)} value="View" />
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default MyMovie