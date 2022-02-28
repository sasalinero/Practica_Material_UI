import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Avatar, TextField, IconButton } from '@material-ui/core';

// import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton><MenuIcon fontSize='large'/></IconButton>
        
      <img src="https://www.megaidea.net/wp-content/uploads/2020/10/Baby-Yoda-Clipart.png" alt="human_logo" /></div>
      
      <div className='header__menu'>
        <h3>Home</h3>
        <h3>Quick menu <span><KeyboardArrowDownIcon/></span></h3>
      </div>
      <div className='header__right'></div>
      <form action="">
      <TextField id="filled-basic" label="Filled" variant="filled" />
      </form>
      <Avatar/>

      
    
      
      
      </div>
  )
}

export default Header