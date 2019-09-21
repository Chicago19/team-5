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
		//const {classes} = this.props;

	    function handleDrawerOpen() {
	      this.setOpen(true);
	    }

	    function handleDrawerClose() {
	      this.setOpen(false);
	    }

		return (
			 <div className="Nav-Bar">
		      <div className="root">
			      <AppBar position="static" className="bar">
			        <Toolbar>
			          <Typography variant="h6" className="title">
			            Profile Dashboard
			          </Typography>
			          <Button color="inherit" className="login" style={{marginLeft: 1100}}>User Name</Button>
			        </Toolbar>
			      </AppBar>
			   </div>
		      <Paper className="papers" style={{marginTop: 100, height: 100, width:950, marginLeft: 225}}>
		        <Typography variant="h5" component="h3" style={{marginLeft: 50, marginTop: 75}}>
		          Classes
		        </Typography>
		        <Typography component="p">
		          (click to view course page)
		        </Typography>
		      </Paper>
		      <Paper className="papers" style={{marginTop: 100, height: 100, width:950, marginLeft: 225}} color="secondary">
		        <Typography variant="h5" component="h3">
		          Calendar 
		        </Typography>
		        <Typography component="p">
		          (click to view class calendars)
		        </Typography>
		      </Paper>
		    </div>
		);
	}
}

export default profilePage;