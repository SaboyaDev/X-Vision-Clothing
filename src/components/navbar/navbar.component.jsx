import React from 'react';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/logox.svg';
import './navbar.styles.scss';

// import { container } from 'react-bootstrap';

const Navbar = ({ currentUser, hidden }) => (
	<div className='header'>
		<div className='header-container'>
			<div className='header-container-top'>
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
					<CartIcon />
				</div>
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	</div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Navbar);
