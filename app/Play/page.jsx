'use client'
import Nav from '@/components/Nav';
import React, { useState } from 'react';
import Page from '@/components/Page';

export default function page() {


  // const handleFavoriteToggle = (index) => {
  //   const newData = [...data]; // Create a copy of the data array
  //   newData[index].isFavorite = !newData[index].isFavorite; // Toggle the isFavorite property of the selected item
  //   setData(newData); // Update the state with the new data
  // };onFavoriteToggle={() => handleFavoriteToggle(index)} 

  return (
    <div>
      <Nav />
      <Page/>
      
    </div>
  );
}
