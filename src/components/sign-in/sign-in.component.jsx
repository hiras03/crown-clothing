import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email:'', password:''});
    }

    handleChange = event => {
        const  { value, name } = event.target;

        this.setState({ [ name ] : value });
    }
     

    render() {
        return(
            <div className='sign-in'>
                <h2>I already Have an Account!</h2>
                <span>Sign in with your email and password</span>
            
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='email'/>

                    <FormInput name='password' value='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='password'/>

                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;