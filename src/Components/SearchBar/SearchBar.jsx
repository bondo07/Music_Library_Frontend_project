import React, { useState } from 'react';
import './SearchBar.css'

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
        <form className='form_spacing' onSubmit={handleSubmit}>
            <div className='search_box'>
                <input icon='search'  type='text' placeholder='Search here...' value={searchField} onChange={handleSearch}/>
            </div>
            <div className='search_button'>
                <button type='submit' className='form_buttons'>Search</button>
            </div>
            <div>
                <button onClick={props.getAllSongs} className='form_buttons'>Clear Filter</button>
            </div>
        </form>
     );
}
 
export default SearchBar;