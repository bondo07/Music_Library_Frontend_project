import React, { useState } from 'react';
import axios from 'axios';


const AddSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setRelease_Date] = useState('');
    const [genre, setGenre] = useState('');

    const handleTitle = e => setTitle(e.target.value)
    const handleArtist = e => setArtist(e.target.value)
    const handleAlbum = e => setAlbum(e.target.value)
    const handleRelease_Date = e => setRelease_Date(e.target.value)
    const handleGenre = e => setGenre(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSong = {
            title: title, 
            artist: artist, 
            album: album, 
            release_date: release_date, 
            genre: genre};
        createSong(newSong);
        setTitle('')
        setArtist('')
        setAlbum('')
        setRelease_Date('')
        setGenre('')
    }
    
    async function createSong(newSong) {
        const response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
        try {
            if(response.status === 201) {
              await props.getAllSongs();
        }}
        catch (error) {console.error(error)}
      }
    
    
    return (
            <form className='add_song_form' onSubmit={handleSubmit}>
                <div className='addsong_spacing'>
                    <div>
                        <label>Title</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Song Title...' value={title} onChange={handleTitle}/>
                    </div>
                </div>
                <div className='addsong_spacing'>
                    <div>
                        <label>Artist</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Artist Name...' value={artist} onChange={handleArtist}/>
                    </div>
                </div>
                <div className='addsong_spacing'>
                    <div>
                        <label>Album</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Album Name...' value={album} onChange={handleAlbum}/>
                    </div>
                </div>
                <div className='addsong_spacing'>
                    <div>
                        <label>Release Date</label>
                    </div>
                    <div>
                        <input type='date' value={release_date} onChange={handleRelease_Date}/>
                    </div>
                </div>
                <div className='addsong_spacing'>
                    <div>
                        <label>Genre</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Genre Type...' value={genre} onChange={handleGenre}/>
                    </div>
                </div>
                <div className='addsong_spacing'>
                    <button type='submit'className='add_button'>Add New Song</button>
                </div>
            </form>
    );
}
 
export default AddSong;