import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListarRecetas from './components/ListarRecetas';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className='container mt-5 '>
            <div className='row'>
              <Formulario />
            </div>
              <ListarRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
