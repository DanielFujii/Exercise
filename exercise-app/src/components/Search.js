import React, { Component } from 'react';

class Search extends Component {

	constructor(props) {
		super(props);

		this.state = {
			query: '',
			results: []
		};
	}

	getResponse() {
		return {
		  candidates : [
		    {
		    	place_id : "ChIJJT752adYwokR0I_FII4lHns"
		    },
		    {
		    	place_id : "DhIJJT752adYwokR"
		    }
		  ],
		  debug_log : {
		    line : []
		  },
		  status : "OK"
		}
	}

	updateInput(event) {
		this.setState({ query: event.target.value });
	}

	performSearch(event) {
		event.preventDefault();

		let query = this.state.query;
		let response = this.getResponse();
		this.setState({ results: response.candidates})
	}

	renderResults() {
		return this.state.results.map( r => 
			<p>{r.place_id}</p>
		);
	}

	render() {
		return (
			<div>
				<input 
					placeholder='Address'
					onChange={() => this.updateInput.bind(this)} />
				<button onClick={this.performSearch.bind(this)}>Search</button>
				<button>Clear</button>
				{ this.state.results.length === 0 ? <p>No Results</p> : this.renderResults() }
			</div>
		);
	}
}

export default Search;