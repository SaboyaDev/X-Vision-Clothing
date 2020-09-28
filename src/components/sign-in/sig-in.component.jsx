import React, { Component } from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

class SignIn extends Component {
	constructor(props) {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		const { handleChange, handleSubmit } = this;
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
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
				{/* <input type='submit' value='Submit Form' onSubmit={handleSubmit} /> */}
				<CustomButton type='submit'>Sign In</CustomButton>
			</div>
		);
	}
}

export default SignIn;
