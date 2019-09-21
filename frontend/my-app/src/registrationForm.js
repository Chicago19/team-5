import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";

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
    alignItems: 'center'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
      margin: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 300,
  },
}));

function RadioButtonsGroup2(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("e");


  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"> {props.question} </FormLabel>
        <RadioGroup aria-label="Question" name="Question1" value={value} onChange={handleChange}>
          <FormControlLabel value= "a" control={<Radio />} label= {props.a} />
          <FormControlLabel value= "b" control={<Radio />} label= {props.b} />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

function RadioButtonsGroup4(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("e");


  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"> {props.question} </FormLabel>
        <RadioGroup aria-label="Question" name="Question1" value={value} onChange={handleChange}>
          <FormControlLabel value= "a" control={<Radio />} label= {props.a} />
          <FormControlLabel value= "b" control={<Radio />} label= {props.b} />
          <FormControlLabel value= "c" control={<Radio />} label= {props.c} />
          <FormControlLabel value= "d" control={<Radio />} label= {props.d} />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

function RadioButtonsGroup5(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("f");


  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"> {props.question} </FormLabel>
        <RadioGroup aria-label="Question" name="Question1" value={value} onChange={handleChange}>
          <FormControlLabel value= "a" control={<Radio />} label= {props.a} />
          <FormControlLabel value= "b" control={<Radio />} label= {props.b} />
          <FormControlLabel value= "c" control={<Radio />} label= {props.c} />
          <FormControlLabel value= "d" control={<Radio />} label= {props.d} />
          <FormControlLabel value= "e" control={<Radio />} label= {props.e} />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

function RadioButtonsGroup6(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("g");


  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"> {props.question} </FormLabel>
        <RadioGroup aria-label="Question" name="Question1" value={value} onChange={handleChange}>
          <FormControlLabel value= "a" control={<Radio />} label= {props.a} />
          <FormControlLabel value= "b" control={<Radio />} label= {props.b} />
          <FormControlLabel value= "c" control={<Radio />} label= {props.c} />
          <FormControlLabel value= "d" control={<Radio />} label= {props.d} />
          <FormControlLabel value= "e" control={<Radio />} label= {props.e} />
          <FormControlLabel value= "f" control={<Radio />} label= {props.f} />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

// sendRegistrationData = (event) =>{
//   axios.post('http://localhost:3001/registration', {
//     name: 'Fred Flintstone',
//     zipcode: '01234',
//     email: 'fred@flintstone.com',
//     password: 'abcd',
//     age: '22',
//     question1: 'a',
//     question2: 'a',
//     question3: 'a',
//     question4: 'a',
//     question5: 'a'

//   }).then(res=>(console.log(res.data["Type"])))
// }

class registrationPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {name: " ", zipcode: 0, email: " ", password: " ", age: 0, q1: " ", q2: " ", q3: " ", q4: " ", q5: " ", english: true}
  }

  handleNameChange=(event)=>{
      this.setState({name: event.target.name});
  }

  handleZipChange=(event)=>{
    this.setState({zip: event.target.zip});
  }

  handleEmailChange=(event)=>{
    this.setState({email: event.target.email});
  }

  handlePasswordChange=(event)=>{
    this.setState({password: event.target.password});
  }

  handleAgeChange=(event)=>{
    this.setState({age: event.target.age});
  }

  handleQ1Change=(event)=>{
    this.setState({q1: event.target.q1});
  }

  handleQ2Change=(event)=>{
    this.setState({q2: event.target.q2});
  }

  handleQ3Change=(event)=>{
    this.setState({q3: event.target.q3});
  }

  handleQ4Change=(event)=>{
    this.setState({q4: event.target.q4});
  }

  handleQ5Change=(event)=>{
    this.setState({q5: event.target.q5});
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3005/registration', {
      name: this.state.name,
      zipcode: this.state.zip,
      email: this.state.email,
      password: this.state.password,
      age: this.state.age,
      q1: this.state.q1,
      q2: this.state.q2,
      q3: this.state.q3,
      q4: this.state.q4,
      q5: this.state.q5
    }).then(res=>(console.log(res.data["Type"])))
  }

    render() {
      const { classes } = this.props;
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      const [values, setValues] = React.useState({
        });
      };
      return (
        <Container component="main" maxWidth="xs">
          <Typography variant="h4" className={classes.title}>
            Registration
          </Typography>
          <CssBaseline />
          <div className={classes.paper}>
            <Typography>
              Thank you for considering PODER as your new educational home. Please fill out the following registration form and review our policies on the back. We look forward to seeing you in the classroom!
            </Typography>
            <form className={classes.form} noValidate>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="outlined-name"
                  label="Name"
                  className={classes.textField}
                  onChange={handleChange('name')}
                  margin="normal"
                  variant="outlined"
                  name={this.state.name}
                  onChange={this.handlePassChange}
                />

                <TextField
                  id="outlined-zipcode"
                  label="Zip Code"
                  className={classes.textField}
                  onChange={handleChange('zipcode')}
                  margin="normal"
                  variant="outlined"
                  zipcode={this.state.zipcode}
                  onChange={this.handlePassChange}
                />

                <TextField
                  id="outlined-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  email={this.state.email}
                  onChange={this.handlePassChange}
                />

                <TextField
                  id="outlined-password"
                  label="Password"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  password={this.state.password}
                  onChange={this.handlePassChange}
                />

                <div className = {classes.menu}>
                <Typography>
                  Age
                </Typography>
                <Slider
                  defaultValue={32}
                  aria-labelledby="Age"
                  aria-label = "Age"
                  valueLabelDisplay="auto"
                  step={1}
                  min={16}
                  max={80}
                  age={this.state.age}
                  onChange={this.handlePassChange}
                />
                </div>

                <RadioButtonsGroup6
                  question="How did you hear about PODER?"
                  a = "Friend or Relative"
                  b = "Community Organization"
                  c = "Church"
                  d = "Voluntarily "
                  e = "Internet"
                  f = "Flyer"
                  q1={this.state.q1}
                  onChange={this.handlePassChange}
                />

                <RadioButtonsGroup5
                  question="What is your primary reason for choosing PODER?"
                  a = "To learn English"
                  b = "To obtain a job "
                  c = "Training/ Job Assistance"
                  d = "Computers and Technology"
                  e = "Other"
                  f = "Flyer"
                  q2={this.state.q2}
                  onChange={this.handlePassChange}
                />
                <RadioButtonsGroup4
                  question="Please select the location you would like to receive your classes:"
                  a = "Pulaski/ Marquette Bank (6155 S. Pulaski)"
                  b = "Kedzie/ MFS (6422 S. Kedzie)"
                  c = "Sawyer/ St. Gall Parish (5533 S. Sawyer)"
                  d = "Stevenson/ MFS (8010 S. Kostner)"
                  q3={this.state.q3}
                  onChange={this.handlePassChange}
                />

                <RadioButtonsGroup2
                  question="Please select the class time you prefer:"
                  a = "Morning (AM)"
                  b = "Evening (PM) "
                  q4={this.state.q4}
                  onChange={this.handlePassChange}
                />

                <RadioButtonsGroup6
                  question="What is your main form of transportation?"
                  a = "Walking"
                  b = "Bus"
                  c = "Car"
                  d = "Train"
                  e = "Other"
                  f = "Carpool with a friend or relative"
                  q5={this.state.q5}
                  onChange={this.handlePassChange}
                />
              </form>
            </form>
          </div>
          <Button
            type="next"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.next}
            href="/venturestest"
          >
            Next
          </Button>
        </Container>
      );
    }
}

export default withStyles(useStyles)(registrationPage);
