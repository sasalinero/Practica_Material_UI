
//Aquí creamos la manguera de datos que van a ser accesibles en cualquier punto. 
//1º Importamos varios hooks de react. useContext y createContext lo usamos para crear esa capa de datos.
import { createContext, useReducer, useContext } from "react"; 

// 2º Con esto inicializamos la manguera de datos
export const StateContext= createContext(); 

//4º 
//Esta es la que le va a dar la capa a todo. Este StateProvider esta conectado con el index.js
export const StateProvider =({reducer,initialState, children})=>{
return(

    <StateContext.Provider value={useReducer(reducer, initialState)}>

    {children}
     </StateContext.Provider>
)

}
//3º creamos la funcion useStateValue, que es la que nos va a facilitar el intercambio 
//entre la capa y los componentes y los componentes y la capa
// Con esto vamos a poder consumir el dto en cualquiera de los componentes, nos va a dar la variables 
//isOpen o isTrue
// que nos va a dar un dispatch para poder inyectar cualquier variacion en la "manguera de datos."

export const useStateValue =()=> useContext(StateContext)