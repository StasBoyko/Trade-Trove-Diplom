// Input.jsx
import React from 'react';
import classes from '../UI/component.css';

const Input = ({ type = 'text', placeholder = '', value, onChange, ...props }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={classes.input}
            {...props}
        />
    );
};

export default Input;
