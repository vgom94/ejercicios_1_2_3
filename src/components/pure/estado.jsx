import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const Estado = (props) => {
   
    return (
        <div>
            <h1>
                Contacto {props.contacto.conectado ? 'En Linea' : 'No Disponible'}
            </h1>
        </div>
    );
};


Estado.propTypes = {
    contacto: PropTypes.instanceOf(Contact),
};


export default Estado;
