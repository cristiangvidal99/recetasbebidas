import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';


const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext);

    // funcion para leer los contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda)
                guardarConsultar(true)
            }
            }
            className='col-12'
        >
            <fieldset className='text-center'>
                <legend>Busca bebidas por Categoria o Ingrediente </legend>
            </fieldset>

            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input
                        onChange={obtenerDatosReceta} 
                        name='nombre'
                        className='form-control'
                        type='text'
                        placeholder='Buscar por Ingrediente'
                    />
                </div>

                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='categoria'
                        onChange={obtenerDatosReceta} 
                    >
                        <option
                            value=''
                        >Seleccione Categoría</option>
                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                        
                    </select>
                </div>

                <div>
                    <input
                        type='submit'
                        className='btn btn-block btn-primary'
                        value='Buscar bebida'
                    />
                </div>
            </div>
        </form>    
    );
}
 
export default Formulario;