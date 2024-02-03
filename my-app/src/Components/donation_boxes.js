import React from 'react';
import './ComponentsStyle/donation_boxes.css'; // Assurez-vous d'inclure la feuille de style

const Button = ({ text, style }) => {
    return (
        <button className="flat-button" style={style}>
            {text}
        </button>
    );
};

export default Button;