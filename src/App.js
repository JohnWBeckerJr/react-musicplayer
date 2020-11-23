import React, { useState, useRef } from "react";
//Import Style
import './styles/app.scss';
//Import Components 
import Player from './components/player';
import Song from './components/song'; 
//Import Music 
import data from './util'; 
//Library 
import Library from './components/library'
//AudioRef 


function App() {
  //Ref
  const audioRef = useRef(null);
  //State 
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState (false);  
  const [songInfo, setSongInfo] = useState ({
    currentTime: 0,
    duration: 0
  });
  const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({...songInfo, currentTime: current, duration });
  };
 
    return (
    <div className="App">  
      <Song currentSong = { currentSong } /> 
      <Player 
      songInfo = { songInfo }
      setSongInfo = { setSongInfo }
      audioRef = {audioRef}
      setIsPlaying = { setIsPlaying }
      isPlaying = { isPlaying }
      currentSong = { currentSong } 
      />
      <Library 
      songs = { songs } 
      setCurrentSong = { setCurrentSong } 
      audioRef = { audioRef } 
      isPlaying =  { isPlaying }
      /> 
      <audio 
            onTimeUpdate = { timeUpdateHandler } 
            ref = { audioRef }  
            src = { currentSong.audio }
            onLoadedMetadata = { currentSong }>     
            </audio>
    </div>
  );
}

export default App;
