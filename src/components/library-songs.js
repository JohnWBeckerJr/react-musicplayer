import React from 'react';



const LibrarySong = ({ 
    song, 
    songs, 
    setCurrentSong, 
    id, 
    audioRef, 
    isPlaying, 
    setSongs }) => {
    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id); 
        await setCurrentSong(selectedSong[0]); 
        audioRef.current.play();
        //New State 
        const newSongs = songs.map((song) => {
            if(song.id === id){
                return {
                    ...song, 
                    active: true, 
                }
                    } else {
                    return {
                        ...song, 
                        active: false,
                    }; 
                }
        });
        setSongs(newSongs); 
        //Check if song is playng 
        if(isPlaying) audioRef.current.play(); 
    };
    return (
        <div onClick = {songSelectHandler} className = {`library-song ${song.active ? 'selected' : ""}`} >
            <img alt = {song.name} src = {song.cover}></img>
            <div className = "song-description">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
        </div>
    );
};
 
export default LibrarySong; 