import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ModalContext = createContext()

const ModalProvider = (props) => {

    // state del provider
    const [idreceta, guardarIdReceta] = useState(null);
    const [recetainfo, guardarReceta] = useState({})
    // una vez que tenemos la receta, consulta la api
    useEffect( () => {
        const obtenerReceta = async () => {
            if(!idreceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const res = await axios.get(url);
            guardarReceta(res.data.drinks[0]);
        }
        obtenerReceta();
    },[idreceta]);
    
    return (
        <ModalContext.Provider
            value={{
                recetainfo,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;