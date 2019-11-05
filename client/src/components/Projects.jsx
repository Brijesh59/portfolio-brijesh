import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GithubCard from "./GithubCard";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    zIndex: 100
  },
  container: {
    marginTop: 110,
    width: "60%",
    // border: "1px solid #707070"
    [theme.breakpoints.down("sm")]: {
      width: "85%",
      marginTop: 74,
      marginBottom: "10px"
    },
    [theme.breakpoints.down("md")]: {
      width: "85%"
    }
  },
  tabs: {
    position: "fixed",
    boxShadow: "none",
    // top: "5",
    width: "60%",
    backgroundColor: "#F7F8F9",
    zIndex: 100,
    [theme.breakpoints.down("sm")]: {
      width: "85%",
      marginBottom: "10px"
    },
    [theme.breakpoints.down("md")]: {
      width: "85%"
    }
  }
}));

const CustomTabs = withStyles({
  root: {
    borderBottom: "2px solid #e8e8e8"
  },
  indicator: {
    backgroundColor: "#1890ff"
  }
})(Tabs);

const CustomTab = withStyles(theme => ({
  root: {
    zIndex: 1,
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: "Raleway, sans-serifato",
    fontSize: 20,
    color: "#000",
    "&:hover": {
      color: "#40a9ff",
      opacity: 1
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#40a9ff"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

export default function Projects() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    localStorage.setItem('previousURL', window.location.pathname)
    setValue(0);
    window.onscroll = () => {
      // console.log(window.scrollY);
    };
  }, []);

  const TabContainer = props => {
    return (
      <Typography component="div" style={{ marginTop: 70 }}>
        {props.children}
      </Typography>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Paper square className={classes.tabs}>
          <CustomTabs
            value={value}
            onChange={handleChange}
            aria-label="custom tabs"
          >
            <CustomTab label="Projects" />
            <CustomTab label="Github" />
          </CustomTabs>
          <Typography className={classes.padding} />
        </Paper>
        {value === 0 && (
          <TabContainer style={{ zIndex: -1 }} className={classes.fadeScroll}>
            <ProjectCard 
                projectTitle='School Management System'
                projectDescription='A div element with a shadow. The first value is.'
                projectImage='https://picsum.photos/id/12/260/160' 
                tags={['MongoDB', 'NodeJS', 'REST', 'React', 'Express', 'Material UI']}
                demoLink='https://edfinix.herokuapp.com'
                showCode={false}
                codeLink=''
            />
           
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer style={{ zIndex: -1 }} className={classes.fadeScroll}>
            <GithubCard />
          </TabContainer>
        )}
      </div>
    </div>
  );
}

// export default withStyles(useStyles)(Projects);
