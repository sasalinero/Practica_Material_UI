import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Avatar, TextField, IconButton } from "@material-ui/core";
import {useStateValue} from "../components/StateProvider";
import { actionTypes } from "./reducer";

// import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
const [{isopen}, dispatch]= useStateValue();
const toggleMenu =()=> {
  
  //1º Hay que saber en que estado está la variable,
  // 2º consumirla, 
  // 3º cambiarla y despacharla (dispatch) otra vez a la manguera.
  dispatch({
    type: actionTypes.TOGGLE_MENU,
    isopen:!isopen, 
  })
  //Por lo tanto cuando demos al boton cambiaremos el estado de verdadero a falso y viceversa
  //Por último vamos a reducer.js para escuchar este cambio en el state
}


  return (
    <div className="header">
      <div className="header__left">
        <IconButton onClick={toggleMenu}>
          <MenuIcon fontSize="large" />
        </IconButton>

        <img
          src="https://www.megaidea.net/wp-content/uploads/2020/10/Baby-Yoda-Clipart.png"
          alt="human_logo"
        />
      </div>

      <div className="header__menu">
        <h3>Home</h3>
        <h3>
          Quick menu{" "}
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </h3>
      </div>
      <div className="header__right"></div>
      <form action="">
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </form>
      <Avatar />
    </div>
  );
};

export default Header;
