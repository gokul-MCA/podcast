'use client'
import Image from 'next/image';
import { useState, useRef } from 'react';
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";


const ImageWithPlayIcon = ({ src, alt, width, height }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playPauseToggle = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      onClick={playPauseToggle}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className="rounded-md"
      />
      <audio
        ref={audioRef} // Add ref to access audio element
        src='/Music/audio_converter_8_1.mp3'
        className="w-full"
      />
        
      {/* {isHovered && ( // Show play/pause button only when hovered */}
        <button
          className='absolute bottom-0 right-0 btn border bg-black rounded-full w-10 h-10 m-2 flex justify-center items-center z-10'
        >
          {isPlaying ? (
            <IoPauseOutline className="w-5 h-5 " />
          ) : (
            <IoPlayOutline className="w-5 h-5 " />
          )}
          
        </button> 
      {/* )} */}
    </div>
  );
};

export default ImageWithPlayIcon;
