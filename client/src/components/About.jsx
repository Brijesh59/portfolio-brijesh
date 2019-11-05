import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const styles = theme => ({
    container:{
        margin: '120px auto',
        textAlign: 'center',   
    },
    bigAvatar: {
      margin: '0px auto',
      width: 180,
      height: 180,
    },
    name: {
        fontWeight: '400',
        fontSize: '60px',
        fontFamily: 'Raleway, sans-serif',
        color: '#1A7CDE',
        [theme.breakpoints.down('sm')]: {
            fontSize: '45px',
        },
    },
    position:{
        fontWeight: '300',
        fontSize: '40px',
        fontFamily: 'Raleway, sans-serif',
        color: '#4E4E4E',
        [theme.breakpoints.down('sm')]: {
            fontSize: '35px',
        },
    },
    role:{
        fontWeight: '300',
        fontSize: '25px',
        fontFamily: 'Raleway, sans-serif',
        color: '#4E4E4E',
        marginTop: '-10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
    },
    navigation:{
        fontWeight: '300',
        fontSize: '25px',
        fontFamily: 'Raleway, sans-serif',
        color: '#4E4E4E',
        position: 'relative',
        marginTop: '15px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
    },
    dot:{
        width: '5px',
        height: '5px',
        display: 'inline-block',
        borderRadius: '50%',
        background: '#707070',

        margin: '0',
        position: 'absolute',
        top: '50%',
        transform: `translateY(-50%)`,
    }

});

class About extends Component {
    componentDidMount(){
        localStorage.setItem('previousURL', window.location.pathname);
        this.props.onRouteChanged(window.location.pathname);
    }
    componentWillUnmount(){
        this.props.onRouteChanged(window.location.pathname);
    }
    render() { 
        const {classes} = this.props;
        return ( 
            <div className={classes.container} >
                <Avatar 
                    src="https://i.pravatar.cc/300?img=60" 
                    className={classes.bigAvatar}
                />
                <Typography
                    className={classes.name}> 
                    Brijesh Kumar
                </Typography>
                <Typography
                    className={classes.position}> 
                    Software Engineer
                </Typography>
                <Typography
                    className={classes.role}> 
                    Web/Mobile Developer
                </Typography>
                <div
                    className={classes.navigation}>
                    <Link to='skills'>Skills</Link> <div className={classes.dot} /> &nbsp;&nbsp;
                    <Link to='projects'>Projects</Link> <div className={classes.dot} /> &nbsp;&nbsp;
                    <Link to='contact'>Contact</Link> <div className={classes.dot} /> &nbsp;&nbsp;
                    <Link to='resume'>Resume</Link>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(About);