import React from 'react';
import './Working.scss';

const Working = ({ className, ...rest }) => {
	return (
		<>
			<section className='Working'>
				<h2>CSS Grids</h2>
				<p>
					This is the template you can use to follow along the course.
				</p>
				<article className='grid'>
					<div>Item 1</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>Item 4</div>
					<div>Item 5</div>
					<div>Item 6</div>
				</article>
			</section>
			<section className='Working-Areas'>
				<h2>Grid Template Areas</h2>
				<p>
					This is the template you can use to follow along the course.
				</p>
				<article className='grid'>
					<div>Item 1</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>Item 4</div>
					<div>Item 5</div>
					<div>Item 6</div>
				</article>
			</section>
			<section className='Working-RepeatMinmax'>
				<h2>Grid Template Repeat & Minmax & Autofill</h2>
				<p>
					This is the template you can use to follow along the course.
				</p>
				<article className='grid'>
					<div>Item 1</div>
					<div>Item 2</div>
					<div>Item 3</div>
					<div>Item 4</div>
					<div>Item 5</div>
					<div>Item 6</div>
					<div>Item 7</div>
					<div>Item 8</div>
					<div>Item 9</div>
					<div>Item 10</div>
					<div>Item 11</div>
					<div>Item 12</div>
				</article>
			</section>
		</>
	);
};

export default Working;
