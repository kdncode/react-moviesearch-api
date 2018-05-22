import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyMovie from './MyMovie';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
	  super(props);
	  this.state = {}

	   this.performSearch("Woman") 
  }

	performSearch(searchTerm){
		const urlString = "https://api.themoviedb.org/3/search/movie/?api_key=2b05b7fad900405d94cdccc26a43b875&query=" + searchTerm
		$.ajax({ 
			url: urlString,
			success: (searchResults) => { 
				const results = searchResults.results;
				
				var movieRows = [];
				
				results.forEach(movie => {
					movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
					const movieRow = <MyMovie key={movie.id} movie = { movie } />
					movieRows.push(movieRow)
				});

				this.setState( { rows: movieRows })
			},
			error: (xhr, status, err) => { console.error("Failed")}
		})
	}

	searchChangeHandler(event) {
		console.log(event.target.value);
		const boundObject = this
		const searchTerm = event.target.value;
		boundObject.performSearch(searchTerm)

	}

  render() {
    return (
      <div>
		<table className="navBar">
			<tbody>
				<tr>
					<td> <img src={logo} className="App-logo" alt="logo" /> </td>
					<td><h1>Movie API Search</h1></td>
				</tr>
			</tbody>
		</table>
		<input onChange={this.searchChangeHandler.bind(this)} className="search" placeholder="Search..."/>

		{this.state.rows}

      </div>
    );
  }
}

export default App;
