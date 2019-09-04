import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import ToDoList from '../ToDoList';
import AddToDo from '../NewNote';
import EditNote from '../EditNote';
import ViewOneNote from '../ViewOneNote';
import Homepage from '../Homepage';
import '../App/index.css';
import TopBar from '../TopBar';
import SideBar from '../Sidebar';


const CenteredDiv = styled.div`
	margin: 0 auto;
	max-width: 1364px;
	width: 100%;
	margin-top: 50px;
	display: flex;
	flex-wrap: wrap;
`;

const MainContainerDiv = styled.div`
    width: 100%;
    max-width: 1364px;
    background-color: #F3F3F3;
    padding: 0px;
    margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
`;

const MainContentDiv = styled.div`
    width: 71%;
    margin: 0 auto;
`;

class MainContainer extends React.Component {
    state = {
        users: [],
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        const endpoint = 'http://localhost:6334/api/users';
        const options = {
            headers: {
                Authorization: token
            }
        }

        axios.get(endpoint, options)
        .then( res => {
            this.setState({ users: res.data });
        })
        .catch (err => {
            console.log('error from /api/users', err);
        });
    };

    render() {
        return (
            <CenteredDiv>
                <TopBar />

            <MainContainerDiv>

                    <SideBar />
                    <MainContentDiv>
                        <Route exact path='/' component={ Homepage } />
                        <Route path='/create' component={ AddToDo } />
                        <Route exact path ='/notes' component={ ToDoList } />
                        <Route path='/notes/:id' render={ props => <ViewOneNote { ...props } /> } />
                        <Route path='/edit/:id' render={ props => <EditNote {...props} /> } />
                        <Route path='/login' component={ Homepage } />
                    </MainContentDiv>
            </MainContainerDiv>
            </CenteredDiv>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default withRouter(connect( mapStateToProps )(MainContainer));