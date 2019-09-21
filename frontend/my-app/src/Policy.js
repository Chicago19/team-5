import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    }));

class policyPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''}
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs" style={{marginTop: 50}}>
        <CssBaseline />
        <div className={classes.paper}>
         <img className="logo"
          src={require("./poder-small.png")}
          style={{width: 75, height: 75, margin: 10, marginLeft: 140}}
          />
          <Typography component="h5" variant="h5" style={{marginLeft: 0}}>
          My Commitment and Responsibilities to PODER Contract 
          </Typography>

          <Typography component="h6" variant="h6" style={{marginLeft: 0}}>
Welcome to PODER! You have chosen an educational center for adults that is committed to providing a quality education to bring together the necessities. To help you achieve your academic goals, there is an implemented structure to follow at PODER. The following are the responsibilities of each student at PODER: 

I agree to the following: 
I will arrive to every class prepared and on time. 
I will only use my phone for emergencies. 
I will dress appropriately to class (short, crop tops, and hats or any sort are not allowed).  
The classroom is an environment of learning, acceptance, and respect in which for special occasions you are able to share food with other students. 
I will lose access to PODER facilities if I bring visitors. 
I will use this opportunity to learn English in order to reach my goals. 
I will recommend the opportunities at PODER to those who can also make use of this opportunity. 

Late/ Tardy Policy
Bring an explanation in writing for each absence before class

If you agree please give your electronic signature  

          </Typography>

          <Typography component="h6" variant="h6" style={{marginLeft: 0}}>
I agree to the following: 
I will arrive to every class prepared and on time. 
I will only use my phone for emergencies. 
I will dress appropriately to class (short, crop tops, and hats or any sort are not allowed).  
The classroom is an environment of learning, acceptance, and respect in which for special occasions you are able to share food with other students. 
I will lose access to PODER facilities if I bring visitors. 
I will use this opportunity to learn English in order to reach my goals. 
I will recommend the opportunities at PODER to those who can also make use of this opportunity. 
          </Typography>

          <Typography component="h6" variant="h6" style={{marginLeft: 0}}>
Late/ Tardy Policy
Bring an explanation in writing for each absence before class

If you agree please give your electronic signature  

          </Typography>
          <form className={classes.form} noValidate onSubmit={this.handleSubmit}>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Signature"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{background: '#64b3d8', color: 'white'}}
              className={classes.newUser}
              href="/venturestest"
            >
              Continue
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(policyPage);
