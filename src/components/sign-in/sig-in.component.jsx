import React, { Component } from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
	constructor(props) {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		const { handleChange, handleSubmit } = this;
		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form className='formGroup' onSubmit={handleSubmit}>
					<FormInput
						name='email'
						type='email'
						value={email}
						handleChange={handleChange}
						label='Email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={password}
						handleChange={handleChange}
						label='Password'
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton
							type='button'
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							Gmail Sign In
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
