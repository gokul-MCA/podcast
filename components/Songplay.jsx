'use client'
import React, { useState, useEffect, useRef } from 'react';
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { MdOutlineSkipPrevious, MdOutlineSkipNext  } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";

const songs = [
  { id: 1, title: 'Song 1', audioSrc: '/Music/audio_converter_2_1.mp3' },
  { id: 2, title: 'Song 2', audioSrc: '/Music/audio_converter_10_1.mp3' },
  { id: 2, title: 'Song 3', audioSrc: '/Music/audio_converter_8_1.mp3' },
  // Add more songs as needed
];

export default function SongPlay() {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateCurrentTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateCurrentTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const playPauseToggle = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
      setDuration(audio.duration);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
    // setDuration(audio.duration);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrag = (e) => {
    if (isDragging) {
      const audio = audioRef.current;
      const progress = (e.clientX - e.target.getBoundingClientRect().left) / e.target.offsetWidth;
      const newTime = progress * audio.duration;
      setCurrentTime(newTime);
      audio.currentTime = newTime;
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const playPreviousSong = () => {
    setCurrentSongIndex(prevIndex => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
    setIsPlaying(false);
  };

  const playNextSong = () => {
    setCurrentSongIndex(prevIndex => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
    setIsPlaying(false);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume; // Set the volume when component mounts or volume changes
  }, [volume]);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const shareSong = () => {

  } 

  return (
    <div className="max-w-md mx-auto">
      <audio
        id="audio"
        ref={audioRef}
        src={songs[currentSongIndex].audioSrc}
        className="w-full"
      />

      <div className="flex items-center justify-between mt-4 p-5">
        <span>{formatTime(currentTime)}</span>
        <div className="h-3 bg-gray-300 flex-1 relative border rounded-md"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseMove={handleDrag}
          onMouseLeave={handleDragEnd}>
          <div className=" h-full bg-blue-500 border rounded-md" style={{ width: `${(currentTime / duration) * 100}%` }} />
          {/* <div className="absolute top-0 left-0 h-full bg-gray-300 opacity-50" style={{ width: `${100-(currentTime / duration) * 100}%` }} /> */}
        </div>
        <span>{formatTime(duration)}</span>
        {/* <div className="ml-2 text-sm">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div> */}
      </div>
      
      <div className='items-center flex justify-center space-x-5'>

      <button
         onClick={shareSong} 
         className=''>
         <FaRegShareSquare  className='w-5 h-5 text-white'/> 
     </button>

      <button
         onClick={playPreviousSong} 
         className='btn border bg-blue-500 rounded-full w-12 h-12 flex justify-center items-center mr-2'>
         <MdOutlineSkipPrevious className='w-7 h-7 text-white'/> 
     </button>

      <button
          onClick={playPauseToggle}
          className='btn border bg-blue-500 rounded-full w-12 h-12 flex justify-center items-center mr-2'>
          {isPlaying ? (
            <IoPauseOutline className="w-7 h-7 text-white" />
          ) : (
            <IoPlayOutline className="w-7 h-7 text-white" />
          )}
     </button>

     <button
         onClick={playNextSong} 
         className='btn border bg-blue-500 rounded-full w-12 h-12 flex justify-center items-center mr-2'>
         <MdOutlineSkipNext className='w-7 h-7 text-white' />
     </button>

     <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className='w-[50px] h-5'
      />
     </div>

    </div>
  )
};
