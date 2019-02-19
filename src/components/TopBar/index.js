import React from 'react';
import styled from 'styled-components';

const TopBarDiv = styled.div`
    width: 100%;
    height: 100px;
    background-color: #D8D8D8;
    padding: 0px 1.5%;
    border-bottom: 2px solid #979797;
`;

const TopBarH1 = styled.h1`
    color: 4A4A4A;
    font-size: 5.2rem;
    text-align: left;
    margin: 0px;
    padding: 0px;
    padding-top: 30px;
    opacity: 0.7;
    font-weight: 650;
    line-height: 4.4rem;
    padding-bottom: 15px;
    margin-bottom: 30px;
`;

const TopBarButton = styled.div`
    height: 62px;
    border: 2px solid #929898;
    background-color: #2BC1C4;
    color: #FFFFFF;
    margin-bottom: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 600;
    cursor: pointer;
`;

const TopBar = () => {
    return (
        <TopBarDiv>
            <TopBarH1>Lambda Notes</TopBarH1>

        </TopBarDiv>
    )
}

export default TopBar;