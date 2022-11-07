import { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import NavBar from './Components/NavBar/NavBar';
import AddSong from './Components/AddSong/AddSong';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css'
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data);
  }


  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <SearchBar songs={songs} setSongs={setSongs} getAllSongs={getAllSongs}/>
      </div>
      <div>
        <MusicTable allMusic={songs}/>
      </div>
      <h1 className='add_message'>Add A Song!</h1>
      <div>
        <AddSong getAllSongs={getAllSongs}/>
      </div>
    </div>
  );
}

export default App;
