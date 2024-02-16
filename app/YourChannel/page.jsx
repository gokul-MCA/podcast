import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pin from "@/components/Pin";
import { Separator } from "@/components/ui/separator"

export default function page() {
  const data = [
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
  ];

  return (
    <div className="w-full p-10">
      
      <div className="grid grid-cols-5 gap-5">
        {/* logo/image */}
        <div className="col-span-1">
          <Image
            className="rounded-full shadow-xl"
            width="200"
            height="200"
            src="/play.jpg"
          />
        </div>
         {/* content */}
        <div className="col-span-4 p-5">
          <h2 className="flex pb-5 text-4xl font-semibold tracking-tight first:mt-0">
            Your Channel
          </h2>

          <div className="flex items-center gap-2 pb-4">
            <p>@yourchannel</p>
             <p>|</p>
            {/* <Separator orientation="vertical" />  */}
            <p>1M subscribers</p>
            <p>|</p>
            {/* <Separator orientation="vertical" /> */}
            <p>80 videos</p>
          </div>

          <p className="pb-4">
            It's with a heavy heart that we announce that we're going to be
            saying farewell to the show.
          </p>

          <p className="pb-4">
            <Link href="www.twitter.com">twitter.com/gopal</Link> and 4 more
            links{" "}
          </p>
          
        </div>
      </div>
      <br></br>
      <hr/>
        
       {/* main content  */}
      <div className="flex p-5 gap-5 ">
          <Link href="" className="underline hover:underline-offset-8">Home</Link>
          <Link href="">Conversation</Link>
          <Link href="">Storytelling</Link>
      </div>

        
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {data.map((data, index) => {
          return <Pin key={index} data={data} />;
        })}
      </div>
      
      
    </div>
  );
}