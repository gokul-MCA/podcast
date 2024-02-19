'use client'
import Image from 'next/image';
import { useState } from 'react';
import { IoPlayOutline } from "react-icons/io5";

const ImageWithPlayIcon = ({ src, alt, width, height }) => {
  const [ishovered, setIsHovered] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className="rounded-md"
      />
      {ishovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <IoPlayOutline className="text-white w-12 h-12" />
            </div>
         
      )}
    </div>
  );
};

export default ImageWithPlayIcon;
