import { Fragment, useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { Link, Outlet } from 'react-router-dom'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/logox.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './navbar.styles.scss'

const Navbar = () => {
	const { currentUser } = useContext(UserContext)

	return (
		<Fragment>
			<div className='header'>
				<div className='header-container'>
					<div className='header-container-top'>
						<Link
							className='logo-container'
							to='/'
						>
							<Logo className='logo' />
							<p>Vision&trade;</p>
						</Link>
						<div className='options'>
							<Link
								className='option'
								to='/'
							>
								HOME
							</Link>
							<Link
								className='option'
								to='/shop'
							>
								SHOP
							</Link>
							<Link
								className='option'
								to='/shop'
							>
								CONTACT
							</Link>
							{currentUser ? (
								<span
									className='nav-link option'
									onClick={signOutUser}
								>
									SIGN OUT
								</span>
							) : (
								<Link
									className='nav-link option'
									to='/auth'
								>
									SIGN IN
								</Link>
							)}
							{/* <CartIcon /> */}
						</div>
					</div>
					{/* {hidden ? null : <CartDropdown />} */}
				</div>
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navbar
