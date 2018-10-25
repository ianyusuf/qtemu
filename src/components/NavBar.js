import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit">QTemu</Typography>
      <Link to="/">
        <Button color="inherit">Home</Button>
      </Link>
      <Link to="/about">
        <Button color="inherit">About</Button>
      </Link>
    </Toolbar>
  </AppBar>
)

export default NavBar