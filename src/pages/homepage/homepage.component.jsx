import React from 'react';
import './homepage.styles.scss';

import Hero from '../../components/hero/hero.component';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
	<div className='homepage'>
		<Hero />
		<Directory />
	</div>
);

export default HomePage;
