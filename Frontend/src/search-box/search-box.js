import React from 'react'

import './search-box.css';

const SearchBox = props => (
    <input 
    className="search-box"
    type='search'
    placeholder='rechercher une oeuvre'
    onChange={props.onSearchChange}
/>
);

export default SearchBox;