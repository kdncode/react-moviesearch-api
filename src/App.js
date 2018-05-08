import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		<table>
			<tbody>
				<tr>
					<td> <img src={logo} className="App-logo" alt="logo" /> </td>

				
				
					<td><h1>Movie API Search</h1></td>
				</tr>
			</tbody>
		</table>
      </div>
    );
  }
}

export default App;
