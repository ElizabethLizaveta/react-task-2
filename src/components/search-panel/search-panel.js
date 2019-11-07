import React from 'react';
import { Input } from 'reactstrap';
import './search-panel.css';
 
const SearchPanel = () => {
    return (
        <Input 
        className="search-input"
        type="text"
        placeholder="Search by post"
        />
    )
}

export default SearchPanel;