import React, { useState } from 'react';
import './References.css'

export const ReferenciaPersonal = () => {
    // Datos quemados en lugar de useState
    const nombre = '';
    const cargo = '';
    const telefono = '';
    const correo = "";
  
    return (
      <div className='contenido'>
        <h2>Referencia Personal</h2>
        <div>
          <label>Nombre</label>
          <span>{nombre}</span>
        </div>
        <div>
          <label>Cargo</label>
          <span>{cargo}</span>
        </div>
        <div>
          <label>Teléfono</label>
          <span>{telefono}</span>
        </div>
        <div>
          <label>Correo</label>
          <span>{correo}</span>
        </div>
      </div>
    );
  };
  