import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchField, setSearchField] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredSongs = props.songs.filter((songs) => {
            return Object.values(songs).join('').toLowerCase().includes(searchField.toLowerCase())  
         })    
         props.setSongs(filteredSongs)
    }

    const handleSearch = e => setSearchField(e.target.value)

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <input icon='search'  type='text' placeholder='Search here...' value={searchField} onChange={handleSearch}/>
            </div>
            <div>
                <button type='submit'>Search</button>
            </div>
            <div>
                <button type='submit' onClick={setSearchField}>Clear</button>
            </div>
        </form>
     );
}
 
export default SearchBar;