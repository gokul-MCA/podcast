'use client'
import React, { useState } from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import Link from "next/link";

const Pin = ({ data, onFavoriteToggle }) => { // Receive onFavoriteToggle as a prop
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="m-2 overflow-hidden relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
    >
      
      <AspectRatio ratio={4 / 3}>
        <Link href='/playCard' target="" className="">
        <Image src="/folder.jpg" fill alt="Image" className="relative" />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <IoPlayOutline className="text-white w-12 h-12" />
          </div>
        )}
        </Link>
      </AspectRatio>
      <CardContent className="p-2">
        <p>{data.title}</p>
      </CardContent>
      <CardContent className="flex items-center">
        <div className="flex items-center">
          <RxAvatar size={20} className="" />
          <CardDescription className="ml-2">{data.author}</CardDescription>
        </div>
        {/* <button onClick={() => onFavoriteToggle(data)} className="text-gray-500">
          {data.isFavorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
        </button> */}
        {/* <CardDescription className="pl-[150px]">{data.fav}</CardDescription> */}
      </CardContent>
    </Card>
  );
};

export default Pin;
