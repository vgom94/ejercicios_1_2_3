import { Contact } from "../../models/contact.class";
import React from 'react';
import PropTypes from 'prop-types';
import Estado from "./estado";


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                Nombre: {contact.nombre}
            </h2>
            <h3>
                Apellido: {contact.apellido}
            </h3>
            <h4>
                Email: {contact.email}
            </h4>
            <h5>
                <Estado contacto={contact}></Estado>
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;