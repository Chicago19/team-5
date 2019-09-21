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

export default function Registration() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
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
                />

                <TextField
                  id="outlined-zipcode"
                  label="Zip Code"
                  className={classes.textField}
                  onChange={handleChange('zipcode')}
                  margin="normal"
                  variant="outlined"
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
                />

                <TextField
                  id="outlined-password"
                  label="Password"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
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
                />

                <RadioButtonsGroup5 
                  question="What is your primary reason for choosing PODER?" 
                  a = "To learn English" 
                  b = "To obtain a job "
                  c = "Training/ Job Assistance"
                  d = "Computers and Technology"
                  e = "Other" 
                  f = "Flyer"
                />  
                <RadioButtonsGroup4
                  question="Please select the location you would like to receive your classes:" 
                  a = "Pulaski/ Marquette Bank (6155 S. Pulaski)" 
                  b = "Kedzie/ MFS (6422 S. Kedzie)"
                  c = "Sawyer/ St. Gall Parish (5533 S. Sawyer)"
                  d = "Stevenson/ MFS (8010 S. Kostner)"
                /> 

                <RadioButtonsGroup2
                  question="Please select the class time you prefer:" 
                  a = "Morning (AM)" 
                  b = "Evening (PM) "
                />    

                <RadioButtonsGroup6
                  question="What is your main form of transportation?" 
                  a = "Walking" 
                  b = "Bus"
                  c = "Car"
                  d = "Train"
                  e = "Other" 
                  f = "Carpool with a friend or relative"
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
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      );
}