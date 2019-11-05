import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import {Link} from 'react-router-dom';
const CustomChip = withStyles({
    outlinedPrimary: {
        color: "#2B92FB",
        borderColor: '#2B92FB'
    }
})(Chip);  

const anchor = <a></a>

const styles = theme => ({
    wrapper: {
      // width: "60%",
      marginBottom: '3%',
      [theme.breakpoints.down("sm")]: {
        // width: "85%",
        marginBottom: "10px"
      },
      [theme.breakpoints.down("md")]: {
        // width: "85%"
      }
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      padding: 0,
      margin:0,
      // background:'red',
      [theme.breakpoints.down("sm")]: {
        // width: "95%",
        position: "static",
        // marginBottom: "10px"
      }
    },
    map: {
      fontFamily:'Raleway, sans-serif',
      position: "relative",
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
    image:{
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        flexShrink: 0,
        minWidth: '100%',
        minHeight: '100%',
        [theme.breakpoints.down("sm")]: {
            borderTopRightRadius:8,
            borderBottomLeftRadius:0,
        }
    },
    title:{
      color: '#282C34',
      fontFamily: "Raleway, sans-serif",
    },
    description:{
      fontFamily: "Raleway, sans-serif",
    },
    demoBtn:{
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
    codeBtn:{
      width:'100px',
      marginTop: 10,
      marginLeft: 10,
      fontFamily: "Raleway, sans-serif",
      border: '1px solid #1D7BDD',
      transition: '0.5s',
      "&:hover":{
        transform: `translateY(-2px)`,
        transition: '0.5s',
        background: '#F7F8F9',
        boxShadow: `0 4px 16px rgba(30, 137, 255, .5)`
      }
    }
  });


class ProjectCard extends Component {
    
    render() { 
        const {classes, projectImage, projectTitle, projectDescription, tags, demoLink, codeLink, showCode} = this.props;
        return (  
            <div className={classes.wrapper}>
                <Grid container style={{border:'1px solid #E5E6E5',
                borderRadius:8, marginBottom:20}}>
                    <Grid item xs={12} sm={12} lg={6} md={6}  style={{padding:0}}>
                        <div className={classes.container}>
                            <img 
                            className={classes.image}
                            src={projectImage} 
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={5} md={5} style={{margin:15}}>
                      <div className={classes.map}>
                          <h3 className={classes.title}>{projectTitle}</h3>
                          <p className={classes.description}>{projectDescription}</p>
                          <div>
                          {
                            tags && tags.map(tag=>(
                              <CustomChip 
                                style={{margin:5}} 
                                key={tag} 
                                label={tag} 
                                color="primary" 
                                variant="outlined" />
                            ))
                          }
                          </div>
                          <Button
                            target="_blank"
                            href={demoLink}
                            className={classes.demoBtn}>Demo</Button>
                          <Button 
                             target="_blank"
                             href={codeLink}
                             className={classes.codeBtn}
                             disabled={!showCode}>
                            Code
                          </Button>
                      </div>
                    </Grid>
                </Grid>
            </div> 
        );
    }
}
 
export default withStyles(styles)(ProjectCard);




