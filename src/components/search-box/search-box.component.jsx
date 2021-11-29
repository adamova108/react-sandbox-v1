import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange, joska}) => {
    return (
        <div>
            <input 
                className='search'
                type='search' 
                placeholder={placeholder} 
                onChange={handleChange} 
            />
            <em>{joska}</em>
        </div>
    )
}