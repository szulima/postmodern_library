import React from 'react';
import Card from './Card.js';

const CardList = ({ books }) => {
	return (
		<div>
			{
				books.map((user,i) => {
					return (
						<Card
							key={books[i].id}
							id={books[i].id}
							name={books[i].name}
							author={books[i].author}
						/>
		);
	})
			}
		</div>
	);
}

export default CardList;