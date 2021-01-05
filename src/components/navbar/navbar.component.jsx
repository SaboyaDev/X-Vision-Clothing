import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';
import { ReactComponent as Logo } from '../../assets/logox.svg';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Navbar = ({ currentUser }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
			<p>Vision&trade;</p>
		</Link>
		<div className='options'>
			<Link className='option' to='/'>
				HOME
			</Link>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/shop'>
				CONTACT
			</Link>
			{currentUser ? (
				<div className='option' onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className='option' to='/signin'>
					SIGN IN
				</Link>
			)}
			<ShoppingBag className='shopping-icon lightBg' />
		</div>
	</div>
);

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Navbar);
