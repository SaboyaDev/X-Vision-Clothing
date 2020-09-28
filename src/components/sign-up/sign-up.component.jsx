import React, { Component } from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

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

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		});
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
				<h2>I don't have an account</h2>
				<span>Sign up with your email and password</span>
				<FormInput
					name='displayName'
					type='displayName'
					value={displayName}
					handleChange={handleChange}
					label='Display Name'
					required
				/>
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
				<FormInput
					name='confirmPassword'
					type='password'
					value={confirmPassword}
					handleChange={handleChange}
					label='Confirm Password'
					required
				/>
				<CustomButton type='submit'>Sign Up</CustomButton>
			</div>
		);
	}
}

export default SignUp;
