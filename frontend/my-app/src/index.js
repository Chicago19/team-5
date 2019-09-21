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
			<Route path="/registration" component={Album} />
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));
