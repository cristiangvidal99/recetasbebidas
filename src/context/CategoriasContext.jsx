import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

// Los datos fluyen desde este archivo

// Crear el context

export const CategoriasContext = createContext();

// Provider es de donde encuentran las funciones y el state

const CategoriasProvider = (props) => {
   
    // crear el state del Context
    const [categorias, guardarCategorias] = useState([]);

    // ejecutar llamado a la API
    useEffect( () => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

            const categorias = await axios.get(url);

            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, []);

    return (
        <CategoriasContext.Provider
            value= {{
                // todo lo que pongamos dentro del value van a estar disponibles en los demas componentes
                categorias
            }}
        >
            { // le pasamos el props
            props.children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider;