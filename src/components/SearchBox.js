import React from 'react';

const SearchBox = ({ searchBox, searchChange }) => {
	return (
		<div className='pa1'>
			<input
				className='pa2 ba b--blue bg-lightest-blue'
				type="search"
				placeholder='search books'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;