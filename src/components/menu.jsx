import React from 'react';

const Menu = () => {
  return (
    <nav id="menu" className="absolute z-50 bg-opacity-90 flex justify-center bg-white shadow-2xl mt-1 mx-2 rounded-lg">
      <div className="input-group flex justify-center sm:w-3/4 md:w-3/4 xs:w-3/4 rounded-lg items-center">
        {/* Ponemos el buscador */}
        <input
          name="buscarBarrios"
          className="form-control rounded-l-lg pt-3 pb-3 pl-4 pr-12 min-w-[400px] w-min sm:w-auto"
          placeholder="Buscar Barrio.."
          list="buscar"
          onKeyUp={something}
        />
        <datalist id="buscar">
          {/* opciones de barrios */}
        </datalist>
      </div>
    </nav>
  );
};

const something = (event) => {
  // Lógica para manejar el evento
};

export default Menu;
