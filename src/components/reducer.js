

//1º Creamos el estado inicial. este es el estado inicial de las variables que vamos a inyectar en la manguera.
//Comos queremos usar este estado inicial en varios sitios hay que "export"

export const initialState= {
    isopen:false,
    user: null,
}

//2º El tipo de acciones que vamos a inyectar en la manguera, el type es TOGGLE_MENU. 
//Que hará lo contrario de lo que tiene(si la variable esta en estado false  la convierte en verdadero)

export const actionTypes={
    TOGGLE_MENU:"TOGGLE_MENU",
    SET_USER: "SET_USER",
}
// 3º Escucha si en algun punto de la "manguera de datos se ha inyectado datos" 
// y se ha alterado el estado inicial.
//Esta función la exportamos por defecto porque es la función principal "export default reducer"
const reducer =(state,action)=>{
//En el caso de que actiontypes sea toggle menu, devuelveme el estado pero de isopen cambialo a false
//en el caso de que no cambie nada devuelve el estado.
console.log(action);
    switch (action.type){
        case actionTypes.TOGGLE_MENU:
            return {
                ...state, 
                isopen: action.isopen,
            }
            case actionTypes.SET_USER:
                return{
                    ...state,
                    use:action.user,
                } 
            default: return state

    }


}


export default reducer