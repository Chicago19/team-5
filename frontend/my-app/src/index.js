import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import SignIn from './SignIn';
import Registration from './registrationForm';
import VenturesTest from './venturesTest';
import profilePage from './profilePage';

const routing = (
	<Router>
		<div>
			<Route exact path="/" component={SignIn} />
			<Route path="/registration" component={Registration} />
			<Route path="/venturestest" component={VenturesTest} />
      		<Route path="/profilePage" component={profilePage} />

		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));
