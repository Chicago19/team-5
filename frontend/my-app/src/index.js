import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
//import App from './App';
import SignIn from './SignIn';
<<<<<<< HEAD
import Registration from './registrationForm';
import VenturesTest from './venturesTest';
import profilePage from './profilePage';
=======
import Album from './registrationForm';
import * as serviceWorker from './serviceWorker';
>>>>>>> 02d0e9992c49965e5fd1ff98f175e1f197e290b3

const routing = (
	<Router>
		<div>
			<Route exact path="/" component={SignIn} />
<<<<<<< HEAD
			<Route path="/registration" component={Album} />
=======
			<Route path="/registration" component={Registration} />
			<Route path="/venturestest" component={VenturesTest} />
<<<<<<< HEAD
      		<Route path="/profilePage" component={profilePage} />
=======
      <Route path="/profilePage" component={profilePage} />
>>>>>>> 8ec741285e62e149375ccfcc1053aaa4109e8ed1
>>>>>>> 02d0e9992c49965e5fd1ff98f175e1f197e290b3
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));
