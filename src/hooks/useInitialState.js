// el proposito de este hook es devolver las funciones que se usaran en el useContext
//como se relaciona esto con useContext?
//1)appContext.js es llamos desde app.jsx
//2)en app.jsx se llama useInitialState, se almacena en una variable, luego appContext.provider la llama para esparcirla 
//3)en los componentes llamamos a las funciones que retorna useInitialState con use context {addTocart}=useContext(AppContext)


import { useState } from "react";

const initialState = {
    cart: [],
}


    const sameProductsCalc = (payload,state)=>{ //crea un arrray con los productos que seain iguales a el producto "payload"
    const result=state.cart.filter((item) => {//constante que almacena un array con los items=payloads con id repetidas
        return item.id == payload.id
    })
    return result
    }
    
    const useInitialState = () => {
        const [state, setState] = useState(initialState);//initial state es solo un [] vacio, luego va a contener los items del carrito


    const addToCart = (payload) => {//payload serian los nuevos productos
        const arraySamePayload=sameProductsCalc(payload,state)
        const payloadWithNumber = {//agrega las veces que se repitio el payload
            ...payload,
            'repeatedTimes': arraySamePayload.length
        }
        setState({
            ...state,//el estado state va a mantener los  valores de state
            cart: [...state.cart, payloadWithNumber]
        });

    };

    const removeFromCart = (payload) => { //remueve un producto del carrito
        const arraySamePayload=sameProductsCalc(payload,state)
        if (arraySamePayload.length > 1) {//si el payload se repite mas de una vez dara true
            const noRepeatedItem = state.cart.filter((item) => {
               const  higerItemNumberSearched=(item.id === payload.id && item.repeatedTimes === arraySamePayload.length-1)? item:null   
               return item !==higerItemNumberSearched
            })
            setState({
                cart:noRepeatedItem
            }) 
        } else {
            setState({//establecemos como nuevo estado un objeto
                ...state,//utilizamos el spread operator para tener los valores anteriores
                cart: state.cart.filter(items => items.id !== payload.id),//cart propiedad del objeto que va a almacenar los items que no sean iguales
            })
        }
    }

    const productCounter=(count,payload)=>{//agrega o elimina un producto segun el numero de su input
        //count numero en el input, payload producto
        const arraySamePayload=sameProductsCalc(payload,state) //
        if(arraySamePayload.length<count){
            for(let i=arraySamePayload.length;i<count;i++){
                addToCart(payload)
             }
        }
        if(arraySamePayload.length>count){
            for(let i=count;i<arraySamePayload.length;i++){
                removeFromCart(payload)
             }
        }
        return 
    }



    return {
        state,//retornamos el estado
        addToCart,//y la funcion para añadir a el carro
        removeFromCart,
        productCounter,
        sameProductsCalc,
    }
}

export default useInitialState;//exportamos una funcion que retorna el estado y una funcion para agregar cosas a el carro


