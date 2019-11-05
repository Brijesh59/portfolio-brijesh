import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  grow: {
    [theme.breakpoints.down("sm")]: {
    //   flexGrow: 1,
        border: '1px solid red',
        boxShadow: '0px 20px 12px #e8e8e8'
    }
  },
  appBar:{
    boxShadow:'none',
    [theme.breakpoints.down("sm")]: {
        //   flexGrow: 1,    
            boxShadow: `0 -4px 16px rgba(0,0,0,.2)`
        }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  bigAvatar: {
    width: 80,
    height: 80,
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
        marginTop: 0,
        width: 50,
        height: 50,
    },
  },
  sectionDesktop: {
    // display: "none",
    display: "flex",
    margin: "0px auto",
    [theme.breakpoints.down("sm")]: {
        margin: "0",
        position: 'absolute',
        right: 5
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  navigation: {
    fontWeight: "300",
    fontSize: "25px",
    fontFamily: "Raleway, sans-serif",
    color: "#4E4E4E",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    
  },
  selected: {
    color: "#1A7CDE",
    position: "relative",
    
  },
  borderBottom: {
    width: 40,
    height: 5,
    background: "#1A7CDE",
    borderRadius: 20,
    bottom: 0,
    marginTop: 3,
    [theme.breakpoints.down("sm")]: {
        width: 20,
        height: 2,
    },
   
  }
}));

function NavBar(props) {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="skills">Skills</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="projects">Projects</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="contact">Contact</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="resume">Resume</Link>
      </MenuItem>
    </Menu>
  );
  const {
    location: { pathname }
  } = props;
  return (
    <div className={classes.grow}>
      <AppBar
        className={classes.appBar}
        id="navHeader"
        position="fixed"
        style={{ background: "#F7F9FA", padding: 10 }}
      >
        <Toolbar>
          <Avatar
            src="https://i.pravatar.cc/300?img=60"
            className={classes.bigAvatar}
            component={Link}
            to="/"
          />
          <div className={classes.sectionDesktop}>
            <Grid container spacing={1} className={classes.navigation}>
              <Grid item>
                <Link
                  to="skills"
                  className={pathname === "/skills" ? classes.selected : null}
                 
                >
                  Skills
                </Link>
                <div
                  className={
                    pathname === "/skills" ? classes.borderBottom : null
                  }
                 
                />
              </Grid>
              <Grid item>
                <Link
                  to="projects"
                  className={pathname === "/projects" ? classes.selected : null}
                >
                  Projects
                </Link>
                <div
                  className={
                    pathname === "/projects" ? classes.borderBottom : null
                  }
                />
              </Grid>
              <Grid item>
                <Link
                  to="contact"
                  className={pathname === "/contact" ? classes.selected : null}
                >
                  Contact
                </Link>
                <div
                  className={
                    pathname === "/contact" ? classes.borderBottom : null
                  }
                />
              </Grid>
              <Grid item>
                <Link
                  to="resume"
                  className={pathname === "/resume" ? classes.selected : null}
                >
                  Resume
                </Link>
                <div
                  className={
                    pathname === "/resume" ? classes.borderBottom : null
                  }
                />
              </Grid>
            </Grid>
          </div>
          {/* <div className={classes.grow} /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);
/*
  We need to export like this, in order to make work with
  routing properties, like changing styles.

*/
