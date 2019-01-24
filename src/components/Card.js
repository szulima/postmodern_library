import React from 'react';

const Card = ({ name, id, author }) => {
	return (
		<div className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img className="dib" alt="book" src={`https://picsum.photos/200/?random=${id}`}/>
			<div>
				<h2>{name}</h2>
				<p>{author}</p>
			</div>
		</div>
	);
}

export default Card;