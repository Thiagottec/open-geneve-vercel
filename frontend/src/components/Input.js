import React, { useState, useEffect } from 'react';

export default function Input({ placeholder, id, type, className, value, handleChange = null }) {
    const onChange = (e) => {
        console.log("input", e.target.value);
        if (handleChange) {
          handleChange(e.target.value);
        }
    };

    return ( <input placeholder = { placeholder }
        id = {id}
        type = {type}
        className = {className}
        value = {value}
        onChange = {onChange}
        />
    );

}
