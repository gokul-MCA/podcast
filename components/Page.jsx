'use client'
import Pin from "@/components/Pin";
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useState } from 'react';


export default function Page() {
  const [filter, setFilter] = useState("all"); // Default filter is set to "all"

  const data = [
    {
      title: "Podcast Title 1",
      author: "Author Name",
      category: "yoga",
    },
    {
      title: "Podcast Title 2",
      author: "Author Name",
      category: "storytelling",
    },
    {
      title: "Podcast Title 3",
      author: "Author Name",
      category: "yoga",
    },
    {
      title: "Podcast Title 4",
      author: "Author Name",
      category: "storytelling",
    },
    {
      title: "Podcast Title 5",
      author: "Author Name",
      category: "yoga",
    },
    
    // Add more data as needed
  ];

  // Filter pins based on selected category
  const filteredData = filter === "all" ? data : data.filter(item => item.category === filter);


  // const handleFavoriteToggle = (index) => {
  //   const newData = [...data]; // Create a copy of the data array
  //   newData[index].isFavorite = !newData[index].isFavorite; // Toggle the isFavorite property of the selected item
  //   setData(newData); // Update the state with the new data
  // };onFavoriteToggle={() => handleFavoriteToggle(index)} 

  return (
    <div>
    
      <ScrollArea className="h-[90dvh] w-full">
        {/* Filter buttons */}
      <div className="flex p-5 gap-5 ">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "underline hover:underline-offset-8" : ""}>Home</button>
        <button onClick={() => setFilter("yoga")} className={filter === "yoga" ? "underline hover:underline-offset-8" : ""}>Yoga</button>
        <button onClick={() => setFilter("storytelling")} className={filter === "storytelling" ? "underline hover:underline-offset-8" : ""}>Storytelling</button>
      </div>

      {/* Pins */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {filteredData.map((item, index) => (
          <Pin key={index} data={item} />
        ))}
      </div>
      </ScrollArea>
      
    </div>
  );
}
