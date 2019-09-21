import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
//import App from './App';
import SignIn from './SignIn';
import Album from './registrationForm';
import * as serviceWorker from './serviceWorker';

const routing = (
	<Router>
		<div>
			<Route exact path="/" component={SignIn} />
<<<<<<< HEAD
			<Route path="/registration" component={Album} />
=======
			<Route path="/registration" component={Registration} />
			<Route path="/venturestest" component={VenturesTest} />
      <Route path="/profilePage" component={profilePage} />
>>>>>>> 8ec741285e62e149375ccfcc1053aaa4109e8ed1
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));
