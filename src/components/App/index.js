import React from 'react';
import './index.css';
import withRouter from 'react-router-dom/withRouter';
import MainContainer from '../MainContainer';
import { connect } from 'react-redux';
import Homepage from '../Homepage';

import { Route } from 'react-router-dom';

class App extends React.Component {

	render() {
		return (
			<div>
				<Route exact path='/' component={ Homepage } />
				<Route path='/create' component={ MainContainer } />
                <Route exact path ='/notes' component={ MainContainer } />
                <Route path='/notes/:id' component={ MainContainer } />
                <Route path='/edit/:id' component={ MainContainer } />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		notes: state.notes
	}
}


export default withRouter(connect(mapStateToProps)(App));
