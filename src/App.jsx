import { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import NavBar from './Components/NavBar/NavBar';
import AddSong from './Components/AddSong/AddSong';
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
        <AddSong addNewMusic={setSongs}/>
      </div>
      <div>
        <MusicTable allMusic={songs}/>
      </div>
    </div>
      // <div >
      //   <button onClick={() => getAllSongs()}>Get All Songs</button>
      // </div>
  );
}

export default App;
