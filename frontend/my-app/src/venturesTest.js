import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
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
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import axios from 'axios';

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
    const [correct, setCorrect] = React.useState(0);

    const classes = useStyles();
    const [value, setValue] = React.useState("e");

    function handleChange(event) {
      setValue(event.target.value);
      if (value == props.answer) {
        setCorrect(1)
      }else{
        setCorrect(0)
      }
    }

    return (
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend"> {props.question} </FormLabel>
          <RadioGroup aria-label="Question" name="Question" value={value} onChange={handleChange}>
            <FormControlLabel value= "a" control={<Radio />} label= {props.a} />
            <FormControlLabel value= "b" control={<Radio />} label= {props.b} />
            <FormControlLabel value= "c" control={<Radio />} label= {props.c} />
            <FormControlLabel value= "d" control={<Radio />} label= {props.d} />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }

  class testPage extends React.Component{
    constructor(props) {
      super(props);
      this.state = {score: 0}
    }

    handleScoreChange=(event)=>{
        this.setState({score: event.target.value});
     }
   
    handleSubmit=(event)=>{
       event.preventDefault();
      axios.post('http://localhost:3001/score', {
         username: this.state.score
       }).then(res=>(console.log(res.data["Type"])))
     }
  
    render() {
        const { classes }= this.props;
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
            <form className={classes.form} noValidate onSubmit={this.sendScoreData}>
            <RadioButtonsGroup 
            question="1. What's the mother's name?" 
            a = "His name is Pilar." 
            b = "Her name is Pilar." 
            c = "Their name is Pilar."
            d = "Your name is Pilar."
            answer = "b"
            >
            </RadioButtonsGroup>

            <RadioButtonsGroup 
            question="2. There are three __ on the table." 
            a = "cup"
            b = "cups"
            c = "cake"
            d = "plate"
            answer = "b"
            >
            </RadioButtonsGroup>

            <RadioButtonsGroup 
            question="3. Is Ramona happy?" 
            a = "Yes, she is"
            b = "Yes, we are."
            c = "Yes, he is."
            d = "Yes, they are."
            answer = "a"
            >
            </RadioButtonsGroup>
            </form>
          </div>

          <div className={classes.paper}>
           <img className="logo"
            src={require("./carmina.png")} 
            style={{width: 420, height: 140, margin: 10}}
            />
            <form className={classes.form} noValidate onSubmit={this.sendScoreData}>
            <RadioButtonsGroup 
            question="4. Carmina's Resturant is open __." 
            a = "on Sunday" 
            b = "on Tuesday" 
            c = "on Saturday"
            d = "on Monday"
            answer = "b"
            >
            </RadioButtonsGroup>
            </form>
          </div>

          <div className={classes.paper}>
           <img className="logo"
            src={require("./daycare.png")} 
            style={{width: 420, height: 240, margin: 10}}
            />
            <form className={classes.form} noValidate onSubmit={this.sendScoreData}>
            <RadioButtonsGroup 
            question="5. How many people work at the day-care center?" 
            a = "three" 
            b = "four" 
            c = "five"
            d = "six"
            answer = "b"
            >
            </RadioButtonsGroup>

            <RadioButtonsGroup 
            question="6. Who works until 8:00 p.m. on Tuesday and Thursday?" 
            a = "Dan"
            b = "Juan"
            c = "Megan"
            d = "Sally"
            answer = "d"
            >
            </RadioButtonsGroup>
            </form>
          </div>
          <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.next}
                href="/profilePage"
                style={{backgroundColor: '#64b3d8'}}
                >
                Next
            </Button>
        </Container>
      );
    }
  }

  export default withStyles(useStyles)(testPage);
