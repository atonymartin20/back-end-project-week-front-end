import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SignIn from '../SignIn';

const OverallDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const TopBarDiv = styled.div`
    width: 100%;
    height: 75px;
    background-color: #D8D8D8;
    padding: 0px 1.5%;
    border-bottom: 2px solid #979797;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TopBarH1 = styled.h1`
    color: 4A4A4A;
    font-size: 5.2rem;
    margin: 0px;
    padding: 0px;
    opacity: 0.7;
    font-weight: 650;
    color: #2BC1C4;
    -webkit-text-stroke: 1.5px black;
    margin-left: 25px;
`;

const HomepageDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px 3.5%;
`;

const HomepageH2 = styled.h2`
    font-size: 2.5rem;
`;

const HomepageInput = styled.input`
    height: 25px;
    font-size: 1.5rem;
    width: 65%;
    border-radius: 7.5%;
    padding-left: 5px;
`;

const HomepageLabel = styled.label`
    font-size: 2.0rem;
    width: 35%;

`;
const HomepageFormDiv = styled.div`
    width: 45%;
    display: flex;
    margin-bottom: 10px;
`;

const HomepageForm = styled.form`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 2px dashed lightgrey;
    padding: 10px;
`;

const HomepageButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
`;

const HomepageButton = styled.button`
    width: 130px;
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
`;

class Homepage extends React.Component {
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
        const endpoint = 'http://localhost:6334/api/register';
        axios.post(endpoint, credentials)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
            })
            .catch(err => {
                console.log('err from Submit handler in SignUp', err);
            });
    };

    render() {
        return (
            <OverallDiv>
                <TopBarDiv>
                    <TopBarH1>Prof Notes</TopBarH1>
                    <SignIn />
                </TopBarDiv>
            
                <HomepageDiv>
                    <HomepageH2>Welcome to Prof Notes, the best notetaking app in the world.  To use the app you will need to register for access to everything 
                        inside.  If you are already logged in please sign-in in the boxes above.</HomepageH2>
                    <HomepageForm onSubmit={this.SubmitHandler}>
                        <HomepageFormDiv>
                            <HomepageLabel htmlFor='firstName'>First Name:</HomepageLabel>
                            <HomepageInput name='firstName' value={this.state.firstName} onChange={this.InputHandler} type='text' />
                        </HomepageFormDiv>

                        <HomepageFormDiv>
                            <HomepageLabel htmlFor='lastName'>Last Name:</HomepageLabel>
                            <HomepageInput name='lastName' value={this.state.lastName} onChange={this.InputHandler} type='text' />
                        </HomepageFormDiv>

                        <HomepageFormDiv>
                            <HomepageLabel htmlFor='email'>Email Address:</HomepageLabel>
                            <HomepageInput name='email' value={this.state.email} onChange={this.InputHandler} type='text' />
                        </HomepageFormDiv>

                        <HomepageFormDiv>
                            <HomepageLabel htmlFor='phone'>Phone:</HomepageLabel>
                            <HomepageInput name='phone' value={this.state.phone} onChange={this.InputHandler} type='text' placeholder='(000)000-0000' />
                        </HomepageFormDiv>

                        <HomepageFormDiv>
                            <HomepageLabel htmlFor='username'>Username:</HomepageLabel>
                            <HomepageInput name='username' value={this.state.username} onChange={this.InputHandler} type='text' />
                        </HomepageFormDiv>

                        <HomepageFormDiv>
                            <HomepageLabel htmlFor="password">Password:</HomepageLabel>
                            <HomepageInput name="password" value={this.state.password} onChange={this.InputHandler} type='password' />
                        </HomepageFormDiv>

                        <HomepageFormDiv>
                            <HomepageLabel htmlFor='username2'>Confirm Username:</HomepageLabel>
                            <HomepageInput name='username2' value={this.state.username2} onChange={this.InputHandler} type='text' />
                        </HomepageFormDiv>

                        <HomepageFormDiv>
                            <HomepageLabel htmlFor="password2">Confirm Password:</HomepageLabel>
                            <HomepageInput name="password2" value={this.state.password2} onChange={this.InputHandler} type='text' />
                        </HomepageFormDiv>

                        <HomepageButtonDiv>
                                <HomepageButton type='submit' >Register</HomepageButton>
                        </HomepageButtonDiv>

                    </HomepageForm>
                </HomepageDiv>
            </OverallDiv>
        )
    }
}

export default Homepage;