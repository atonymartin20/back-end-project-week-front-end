import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SignInForm = styled.form`
    display: flex;
    background-color: #D8D8D8;
    align-items: center;
    justify-content: space-evenly;
    padding: 0px 1.5%;
`;

const SignInInput = styled.input`
    margin-right: 10px;
    height: 25px;
    font-size: 1.5rem;
`;

const SignInLabel = styled.label`
    font-size: 1.5rem;
    margin-right: 5px;
`;

const SignInButton = styled.button`
    height: 30px;
    border: 2px solid #929898;
    background-color: #2BC1C4;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.1rem;
    font-weight: 600;
    cursor: pointer;
    width: 125px;
    margin-left: 25px;
`;

class SignIn extends React.Component {
    state = {
        username: '',
        password: ''
    }

    InputHandler = event => {
        event.preventDefault();
        const target = event.target;
        this.setState({ [target.name]: target.value });
    }

    SubmitHandler = event => {
        event.preventDefault();
        console.log(this.state);
        const credentials = this.state;
        const endpoint = 'http://localhost:6333/api/login';
        axios.post(endpoint, credentials)
        .then(res => {
            console.log('response data from login', res.data);
            localStorage.setItem('jwt', res.data.token);
            window.location.href = 'http://localhost:3000/notes';
        })
        .catch(err => {
            console.log('err from login', err);
        });
    }

    render() {
        return (
            <SignInForm onSubmit={this.SubmitHandler}>
                <div>
                    <SignInLabel htmlFor="username">Username:</SignInLabel>
                    <SignInInput name="username" value={this.state.username} onChange={this.InputHandler} type='text' />
                </div>
                <div>
                    <SignInLabel htmlFor="password">Password:</SignInLabel>
                    <SignInInput name="password" value={this.state.password} onChange={this.InputHandler} type='text' />
                </div>
                <div>
                    <SignInButton type='submit'>Sign In</SignInButton>
                </div>
            </SignInForm>
        )
    }
}

export default SignIn;