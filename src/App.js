import React, { useState } from "react";
//Import Style
import './styles/app.scss';
//Import Components 
import Player from './components/player';
import Song from './components/song'; 
//Import Music 
import data from './util'; 

function App() {
  //State 
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState (false);  
    return (
    <div className="App">  
      <Song currentSong = { currentSong } /> 
      <Player 
      setIsPlaying = { setIsPlaying }
      isPlaying = { isPlaying }
      currentSong = { currentSong } />
    </div>
  );
}

export default App;
