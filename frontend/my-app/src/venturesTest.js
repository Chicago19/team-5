import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    title: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    formControl: {
        margin: theme.spacing(3),
    },
  }));

  function RadioButtonsGroup(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

  
    function handleChange(event) {
      setValue(event.target.value);
    }
  
    return (
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend"> {props.question} </FormLabel>
          <RadioGroup aria-label="Question" name="Question1" value={value} onChange={handleChange}>
            <FormControlLabel value="1" control={<Radio />} label= {props.a} />
            <FormControlLabel value="2" control={<Radio />} label= {props.b} />
            <FormControlLabel value="3" control={<Radio />} label= {props.c} />
            <FormControlLabel value="4" control={<Radio />} label= {props.d} />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }

  export default function VenturesTest() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
          <Typography variant="h4" className={classes.title}>
            Ventures Test
          </Typography>
          <CssBaseline />
          <div className={classes.paper}>
           <img className="logo"
            src={require("./party.png")} 
            style={{width: 420, height: 240, margin: 10}}
            />
            <form className={classes.form} noValidate>
            <RadioButtonsGroup 
            question="1. What's the mother's name?" 
            a = "His name is Pilar." 
            b = "Her name is Pilar." 
            c = "Their name is Pilar."
            d = "Your name is Pilar."
            />

            <RadioButtonsGroup 
            question="2. There are three __ on the table." 
            a = "cup"
            b = "cups"
            c = "cake"
            d = "plate"
            />

            <RadioButtonsGroup 
            question="3. Is Ramona happy?" 
            a = "Yes, she is"
            b = "Yes, we are."
            c = "Yes, he is."
            d = "Yes, they are."
            />

            <RadioButtonsGroup 
            question="2. There are three __ on the table." 
            a = "cup"
            b = "cups"
            c = "cake"
            d = "plate"
            />
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      );
  }
