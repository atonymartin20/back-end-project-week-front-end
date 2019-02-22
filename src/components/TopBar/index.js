import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


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
    width: 40%;
`;

const SignOutButton = styled.button`
    height: 62px;
    border: 2px solid #929898;
    background-color: #2BC1C4;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 600;
    cursor: pointer;
    width: 200px;
    border-radius: 5px;
  `;

class TopBar extends React.Component {
    logout = () => {
        localStorage.removeItem('jwt');
    }

      SubmitHandler = (event) => {
        event.preventDefault();
        this.setState();
    }

    render() {
        return (
            <TopBarDiv>
                <TopBarH1>Prof Notes</TopBarH1>
                <NavLink to='/' exact> <SignOutButton onClick={this.logout} onSubmit={this.SubmitHandler}>Sign Out</SignOutButton></NavLink>
            </TopBarDiv>
        )
    }
}

export default TopBar;