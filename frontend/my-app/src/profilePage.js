import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from "@material-ui/core/styles";
import Menu from '@material-ui/core/Menu';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './profilePage.css';


class profilePage extends React.Component {
	render() {
		const {theme} = this.props;

	    function handleDrawerOpen() {
	      this.setOpen(true);
	    }

	    function handleDrawerClose() {
	      this.setOpen(false);
	    }

		return (
			 <div className="Nav-Bar" style={{marginBottom: 100}}>
		      <div className="root">
			     <AppBar position="static" className="bar" style={{ background: 'lightgrey'}}>
			        <Toolbar>
				        <img className="logo-full"
				          src={require("./poder-full.png")} 
				          style={{width: 85.12, height: 34.86, margin: 10}}
				         />
			          <Typography variant="h6" className="title" style={{marginLeft: 20}}>
			            Dashboard
			          </Typography>
			          <Button color="inherit" className="login" style={{marginLeft: 1050}} href="/">
						  Logout
					  </Button>
			        </Toolbar>
			      </AppBar>
			   </div>
			   <br /> <br /> <br /> <br />
			   <div className="card-box">
			 		<p className="Classes"> Classes </p>
			 		<p className="description"> (Click here to view classes) </p>
			 	</div>
			 	 <br /> <br /> <br /> <br />
			 	<div className="card-box">
			 		<p className="Classes"> Calendar </p>
			 		<p className="description"> (Click here to view calendar) </p>
			 	</div>
			 	 <br /> <br /> <br /> <br />
			 	<div className="card-box">
			 		<p className="Classes"> Resources </p>
			 		<p className="description"> (Click here to view classes) </p>
			 	</div>
				<br /> <br /> <br /> <br />
				 <Button
					type="submit"
					fullWidth
					size = "large"
					variant="contained"
					color="primary"
				>
					Linkedin
				</Button>
		    </div>
		);
	
	}
}

export default profilePage;