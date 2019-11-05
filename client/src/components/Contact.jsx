import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import "react-toastify/dist/ReactToastify.css";
import Joi from "joi";
import { ToastContainer, toast } from "react-toastify";

import GoogleMap from "./GoogleMap";
import { Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: "10%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: "15%"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40%"
    }
  },
  wrapper: {
    width: "60%",
    border: "1px solid #707070",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
      marginBottom: "10px"
    },
    [theme.breakpoints.down("md")]: {
      width: "85%"
    }
  },
  container: {
    // textAlign: 'center',
    paddingTop: "20px",
    paddingBottom: "20px",
    fontFamily: "Raleway, sans-serifato",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      position: "static",
      marginBottom: "10px"
    }
  },
  map: {
    position: "relative",
    borderLeft: "1px solid #707070",
    height: 400,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
      // position: 'static',
    }
  },
  header: {
    margin: 0,
    paddingTop: 20,
    fontSize: 20,
    fontFamily: "Raleway, sans-serif",
    textAlign: "center"
  },
  input: {
    margin: theme.spacing(1),
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "20px",
    width: "70%"
  },
  inputBorder: {
    margin: theme.spacing(1),
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "20px",
    width: "70%",
    border: "1px solid red"
  },
  btn: {
    width: 200,
    fontSize: 15,
    borderRadius: 20,
    width:'100px',
    marginTop: 10,
    fontFamily: "Raleway, sans-serif",
    background: '#1D7BDD',
    color: '#fff',
    transition: '0.5s',
    "&:hover":{
      transform: `translateY(-2px)`,
      transition: '0.5s',
      background: '#1D7BDD',
      boxShadow: `0 4px 16px rgba(30, 137, 255, .5)`
    }


  },
  cssUnderline: {
    "&:after": {
      borderBottomColor: "#1A7CDE" //"#76F9FB",
    }
  }
});

class Contact extends Component {
  state = {
    fullName: "",
    email: "",
    message: ""
  };

  componentDidMount(){
    localStorage.setItem('previousURL', window.location.pathname)
  }
  
  schema = Joi.object().keys({
    fullName: Joi.string()
      .min(3)
      .max(30)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    message: Joi.string()
      .min(5)
      .max(200)
      .required()
  });

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    Joi.validate(this.state, this.schema, (error, value) => {
      if (!error) {
        // send message
        toast.success("Message Sent", {
          position: toast.POSITION.TOP_RIGHT
        });
        this.setState({
          fullName: "",
          email: "",
          message: ""
        });
      } else {
        toast.warn(error.details[0].message, {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={5} md={5}>
              <div className={classes.container}>
                <p className={classes.header}>Send Me a Message</p>
                <form autoComplete="off" style={{ textAlign: "center" }}>
                  <div>
                    <Input
                      placeholder="Name"
                      name="fullName"
                      className={classes.input}
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.fullName}
                      classes={{
                        underline: classes.cssUnderline
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Email"
                      name="email"
                      className={classes.input}
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.email}
                      classes={{
                        underline: classes.cssUnderline
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Message"
                      name="message"
                      className={classes.input}
                      onChange={this.handleChange}
                      value={this.state.message}
                      multiline
                      rows={5}
                      rowsMax={6}
                      classes={{
                        underline: classes.cssUnderline
                      }}
                    />
                  </div>
                  <Button className={classes.btn} onClick={this.submitForm}>
                    Send
                  </Button>
                  <ToastContainer />
                </form>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={7} md={7}>
              <div className={classes.map}>
                <GoogleMap />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
