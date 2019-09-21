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

class loginPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''}
  }

 handleEmailChange=(event)=>{
     this.setState({username: event.target.value});
     console.log(this.state.username)
  }

  handlePassChange=(event)=>{
     this.setState({password: event.target.value});
     console.log(this.state.password)
     console.log(this)
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state.username)
    console.log(this.state.password)
   axios.post('http://localhost:3001/login', {
      username: this.state.username,
      password: this.state.password
    }).then(res=>(console.log(res.data["Type"])))
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
          <Typography component="h1" variant="h5" style={{marginLeft: 140}}>
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.value}
              onChange={this.handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={this.state.value}
              onChange={this.handlePassChange}
            />
             <br /> <br /> <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{background: '#64b3d8', color: 'white'}}
              className={classes.submit}
              href="/profilePage"
              //onClick={this.sendLoginData(this.state.username, this.state.password)}
            >
              Sign In
            </Button>
             <br /> <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{background: '#64b3d8', color: 'white'}}
              className={classes.newUser}
              href="/registration"
            >
              New User
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(loginPage);
