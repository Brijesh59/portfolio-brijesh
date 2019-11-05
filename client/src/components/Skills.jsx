import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

const styles = theme => ({
    root:{
        marginTop: '10%',
        // textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]:{
            marginTop: '30%',
        }
    },
    container:{
        width: '60%',
        [theme.breakpoints.down('sm')]:{
            width: '80%',
        }
    },
    paper:{
        padding: 5,
        fontWeight: '400',
        fontSize: '20px',
        fontFamily: 'Raleway, sans-serif',
        color: '#707070'
    }
});

const Skills = (props) => {
    const {classes} = props;
    useEffect(() => {
        localStorage.setItem('previousURL', window.location.pathname)
    }, []);
    
    return ( 
        <div className={classes.root}>
            <div className={classes.container}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={4} md={4}>
                        <Paper square className={classes.paper}>
                            <h3 style={{textAlign: 'center', color:'#202120'}}>
                                {'{ } '} 
                                Languages</h3>
                            <ul>
                                <li>Javascript/ES6</li>
                                <li>Core Java</li>
                                <li>C</li>
                                <li>C++</li>
                                <li>Python</li>
                            </ul>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={4} md={4}>
                        <Paper square className={classes.paper}>
                            <h3 style={{textAlign: 'center', color:'#202120'}}>
                                {'</> '} 
                                Developer
                                </h3>
                            <ul>
                                <li>HTML / HTML5</li>
                                <li>CSS / CSS3</li>
                                <li>JavaScript</li>
                                <li>React & Redux</li>
                                <li>Bootstrap & Material UI</li>
                                <li>React Native</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                                <li>REST</li>
                                <li>VS Code Text Editor</li>
                                <li>Chrome</li>
                                <li>Git & Github</li>
                                <li>Postman</li>
                                <li>Heroku</li>
                            </ul>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={4} md={4}>
                        <Paper square className={classes.paper}>
                            <h3 style={{textAlign: 'center', color:'#202120'}}>
                                 {'\\/ '}
                                Other</h3>
                            <ul>
                                <li>Competitive Programming</li>
                                <li>Linux</li>
                                <li>Shell Scripting</li>
                                <li>Azure DevOps</li>
                                <li>Data Modeling</li>
                                <li>MS Flow & Logic Apps</li>
                                <li>Power BI</li>
                                <li>Azure Data Factory</li>
                                <li>CI & CD</li>
                            </ul>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
 
export default withStyles(styles)(Skills);