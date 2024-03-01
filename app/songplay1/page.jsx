'use client'
import React, { useState, useEffect } from 'react';

const songs = [
  { id: 1, title: 'Song 1', audioSrc: '/audio_converter_10_1.mp3' },
  { id: 2, title: 'Song 2', audioSrc: 'Music/audio_converter_2_1.mp3' },
  // Add more songs as needed
];

const AudioPlayer = ({ currentSongIndex, handleDurationChange }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    const audio = document.getElementById('audio');
    const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      setDuration(audio.duration);
      handleDurationChange(audio.duration);
    };

    audio.addEventListener('timeupdate', updateCurrentTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateCurrentTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [handleDurationChange]);

  useEffect(() => {
    if (duration > 0) {
      setProgressBarWidth((currentTime / duration) * 100);
    }
  }, [currentTime, duration]);

  return (
    <div className="w-full mb-4">
      <audio
        id="audio"
        src={songs[currentSongIndex].audioSrc}
        controls
        className="w-full"
      />
      <div className="h-2 bg-gray-300 mt-2 relative">
        <div className="h-full bg-blue-500 absolute top-0 left-0" style={{ width: `${progressBarWidth}%` }} />
      </div>
    </div>
  );
};

export default function SongPlay() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleDurationChange = (duration) => {
    setDuration(duration);
  };

  const playPreviousSong = () => {
    setCurrentSongIndex(prevIndex => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
  };

  const playNextSong = () => {
    setCurrentSongIndex(prevIndex => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-md mx-auto">
      <AudioPlayer currentSongIndex={currentSongIndex} handleDurationChange={handleDurationChange} />
      <button onClick={playPreviousSong}>Previous</button>
      <button onClick={playNextSong}>Next</button>
    </div>
  );
}
