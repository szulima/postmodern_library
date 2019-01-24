import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import { books } from './books';
import SearchBox from '../components/SearchBox';
//import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		 searchField: state.searchField
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: event => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			books: books,
			// searchfield: ''
		}
	}

	// onSearchChange = (event) => {
	// 	this.setState({ searchfield: event.target.value })
	// }

	render() {
		const { books } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredBooks = books.filter(book => {
			return book.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1 ma1'>Book Covers Postmodern Deconstruction</h1>
				<SearchBox searchChange={onSearchChange}/>
					<CardList books={ filteredBooks }/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);