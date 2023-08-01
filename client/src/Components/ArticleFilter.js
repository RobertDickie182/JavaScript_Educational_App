import React from 'react';



const ArticleFilter = ({ filterValue, setFilterCallback }) => {
    const handleChange = (event) => {
        setFilterCallback(event.target.value);
    }
    return (
        <input className="filterbar" type="text" placeholder="Search for something..." onChange={handleChange} value={filterValue} />

    )
}

export default ArticleFilter; 