import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Avatar, makeStyles, Button, Grid } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'

const useStyles = makeStyles({

    header: {
        backgroundColor: 'black'
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100vw'
    },
    ticket: {
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
            '&:hover': {
                color: 'white'
            },
        },
    tabs: {
        color: 'white',
        textDecoration: 'none',
        fontSize: 16,
        marginLeft: '20px',
        backgroundColor: '#2C3333',
        border: '1px solid transparent',
        "&:hover": {
            backgroundColor: 'black',
            color: 'white',
            border: '1px solid #F05454'
        },
    },
    content: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '20px',
        '&:hover': {
            color: 'white'
        },
        cursor: 'pointer',
    },
    navbarLogin: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center'
    }

})

const NavbarComponent = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const navigate = useNavigate();
    const classes = useStyles();


    const signOut = () => {
        localStorage.removeItem("user");
        navigate('/');
    }


    useEffect(() => {
        const token = user?.token;

        if (token) {

            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) signOut();

        }
        setUser(JSON.parse(localStorage.getItem('user')));

    });
    return (

        <AppBar position='static' className={classes.header}>
            <Toolbar>
            <Grid container justifyContent='space-between'>
                <Grid item xs={3} style={{display: 'flex', alignItems: 'center'}} >
                    <NavLink to="/" className={classes.ticket}>TicketWebsite</NavLink>
                </Grid>

                <Grid item xs={6} style={{display: 'flex', justifyContent: 'end'}}>
                {user?.accessToken ? (
                    <>

                        <div className={classes.navbar}>
                                <div>
                                    <NavLink component={Link} to="/profile" className={classes.content} >Tickets</NavLink>
                                </div>
                                <div>
                                    <Avatar className={classes.content} alt={user?.accessToken.fullname} src={user?.accessToken.imageUrl}>{user?.accessToken.fullname.charAt(0).toUpperCase()}</Avatar>
                                </div>
                                <div>
                                    <Typography className={classes.content} variant="h6">{user?.accessToken.username}</Typography>
                                </div>
                            
                            <div><Button color="primary" variant="contained" className={classes.tabs} onClick={signOut} >Logout</Button></div>
                        </div>


                    </>
                ) : (
                    <>
                        <div className={classes.navbarLogin}>
                            <div>
                                <Button variant="contained" component={Link} to="/signIn" className={classes.tabs} >Login</Button>
                            </div>
                            <div>
                                <Button variant="contained" component={Link} to="/signUp" className={classes.tabs}>SignUp</Button>
                            </div>
                        </div>
                    </>
                )}
                </Grid>
            </Grid>
                    

               
            </Toolbar>
        </AppBar>
    )
}

export default NavbarComponent



