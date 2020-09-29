import React, { Component } from 'react';

import MenuItem from '../../components/menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
	constructor() {
		super();
		this.state = {
			sections: [
				{
					title: 'hats',
					imageUrl:
						'https://images.unsplash.com/photo-1575767931074-a91868c89acb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
					id: 1,
					linkUrl: 'shop/hats',
				},
				{
					title: 'jackets',
					imageUrl:
						'https://images.unsplash.com/photo-1542318418-572cbf7eb3be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
					id: 2,
					linkUrl: 'shop/jackets',
				},
				{
					title: 'sneakers',
					imageUrl:
						'https://images.unsplash.com/photo-1579199265916-436a773ce30b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
					id: 3,
					linkUrl: 'shop/sneakers',
				},
				{
					title: 'womens',
					imageUrl:
						'https://images.unsplash.com/photo-1571117223970-ab2b80f5d57b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
					size: 'large',
					id: 4,
					linkUrl: 'shop/womens',
				},
				{
					title: 'mens',
					imageUrl:
						'https://images.unsplash.com/photo-1579311361009-ee29ff5d0051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
					size: 'large',
					id: 5,
					linkUrl: 'shop/mens',
				},
			],
		};
	}
	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
