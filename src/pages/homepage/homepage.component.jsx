import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const HomePage = () => (
	<div className='homepage'>
		<div className='hero-section'>{/* <h1>Hero</h1> */}</div>
		<Directory />
	</div>
);

export default HomePage;
