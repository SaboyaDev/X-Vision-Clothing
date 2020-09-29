import React, { Component } from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
	constructor(props) {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		const { handleChange, handleSubmit } = this;
		return (
			<div className='sign-up'>
				<h2 className='title'>I don't have an account</h2>
				<span>Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={handleSubmit}>
					<FormInput
						name='displayName'
						type='displayName'
						value={displayName}
						onChange={handleChange}
						label='Display Name'
						required
					/>
					<FormInput
						name='email'
						type='email'
						value={email}
						onChange={handleChange}
						label='Email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={password}
						onChange={handleChange}
						label='Password'
						required
					/>
					<FormInput
						name='confirmPassword'
						type='password'
						value={confirmPassword}
						onChange={handleChange}
						label='Confirm Password'
						required
					/>
					<div className='signUpBtn'>
						<CustomButton type='submit'>Sign Up</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
