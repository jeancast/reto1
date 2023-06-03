import React from 'react';
import PropTypes from 'prop-types';
import { Users } from '../modelo/usuario.class';


const Usuarios = ({user}) => {
    return (
        <div>
            <h2>Nombre: {user.nombre}</h2>
            <h2>Apellido: {user.apellido}</h2>
            <h3>Email: {user.email}</h3>
            <h4>{user.conectado ? 'Contacto en linea' : 'Contacto no disponible'}</h4>
        </div>
    );
};


Usuarios.propTypes = {
    user: PropTypes.instanceOf(Users)
};


export default Usuarios;
