import Nav from '@/components/Nav'
import Pin from "@/components/Pin";
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react'

export default function page () {
    const data = [
        {
          title: "Podcast Title1",
          author:"Author Name1",
        },
        {
          title: "Podcast Title",
          author:"Author Name",
        },
        {
          title: "Podcast Title",
          author:"Author Name",
        },
        {
          title: "Podcast Title",
          author:"Author Name",
        },
        {
          title: "Podcast Title",
          author:"Author Name",
        },
        {
          title: "Podcast Title",
          author:"Author Name",
        },]
  return (
    <div>
      <Nav/>
      <ScrollArea className="h-[90dvh] w-full">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {data.map((podcast, index) => {
            return <Pin key={index} data={podcast}/>;
          })}
        </div>
        </ScrollArea>

    </div>
  )
}
