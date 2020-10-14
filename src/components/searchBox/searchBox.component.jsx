import React from 'react';
import "./searchBox.style.css";

const searchBox = ({placeholder, handleChange})=>
{
    return (
        <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
}
export default searchBox;