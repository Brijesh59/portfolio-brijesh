import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";

const styles = theme => ({
  root: {
    marginTop: "10%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30%"
    }
  }
});

class Resume extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
          Resume
        {/* <object
          width="100%"
          height="400"
          alt="Resume"
          aria-label="resume"
          data="https://firebasestorage.googleapis.com/v0/b/node-demo-project-9e66c.appspot.com/o/Resume.pdf?alt=media&token=78f49521-84c0-4150-8930-f76fa1f93089"
          type="application/pdf"
        /> */}
      </div>
    );
  }
}

export default withStyles(styles)(Resume);
