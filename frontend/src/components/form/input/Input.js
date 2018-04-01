import React from 'react';
import "./input.css";

const Input = (props) => {

    const { name, sub_text } = props;
    let upper_name;

    try {
        upper_name = name[0].toUpperCase() + name.slice(1); // uppercase
    } catch (error) {
        console.log("No Name provided");
    }
    return (
        <div className="form-group flex column" >
            <label htmlFor={name}>
                {upper_name} {sub_text ? <span>{sub_text}</span> : ''}
            </label>
            <input type={name} {...props} required />
        </div>
    );
};

export default Input;