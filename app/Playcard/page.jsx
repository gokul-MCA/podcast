import { CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="relative w-full h-[400px] h-[800px]:lg">
        <Image src="/forest.jpg" alt="No image" fill className="rounded-md" />
        <div className="absolute bottom-0 text-white  w-full h-1/2 bg-gradient-to-t from-black to-transparent rounded-md">
          <CardContent className="font-bold text-4xl">
            Podcast Title
          </CardContent>
          <CardDescription className=" text-white text-opacity-70 px-6 text-justify ">
            Description about your podcast which has the all details based on
            you pested podcast.Description about your podcast which has the all
            details based on you pested podcast.Description about your podcast
            which has the all details based on you pested podcast.Description
            about your podcast which has the all details based on you pested
            podcast. Description about your podcast which has the all details
            based on you pested podcast.Description about your podcast which has
            the all details based on you pested podcast.Description about your
            podcast which has the all details based on you pested podcast.
          </CardDescription>
        </div>
      </div>
      <h1 className="font-bold text-2xl pl-6 mt-4">LATEST EPISODE</h1>
      <div className="flex w-full h-[150px] mx-6 mt-6 border rounded-md shadow-md p-2">
        <img
          src="/h.jpg"
          alt="No image"
          width={250}
          height={75}
          className="rounded-md shadow-md"
        />
        <div>
        <CardDescription className="pl-4 text-justify">
            Today
          </CardDescription>
          <h1 className="font-semibold text-2xl pl-4">EPISODE NO. :- 03</h1>
          <CardDescription className="pl-4 text-justify">
            Description about your podcast which has the all details based on
            you pested podcast.Description about your podcast which has the all
            details based on you pested podcast.Description about your podcast
            which has the all details based on you pested podcast.Description
            about your podcast which has the all details based on you pested
            podcast.Description about your podcast which has the all details
            based on you pested podcast.Description about your podcast which has
            the all details based on you pested podcast.Description about your
            podcast which has the all details based on you pested
            podcast.Description about your podcast which has the all details
            based on you pested podcast.
          </CardDescription>
        </div>
      </div>
      <div className="flex w-full h-[150px] mx-6 mt-6 border rounded-md shadow-md p-2">
        <img
          src="/h.jpg"
          alt="No image"
          width={250}
          height={75}
          className="rounded-md shadow-md"
        />
        <div>
          <CardDescription className="pl-4 text-justify">
            Yesterday
          </CardDescription>
          <h1 className="font-semibold text-2xl pl-4">EPISODE NO. :- 02</h1>
          <CardDescription className="pl-4 text-justify">
            Description about your podcast which has the all details based on
            you pested podcast.Description about your podcast which has the all
            details based on you pested podcast.Description about your podcast
            which has the all details based on you pested podcast.Description
            about your podcast which has the all details based on you pested
            podcast.Description about your podcast which has the all details
            based on you pested podcast.Description about your podcast which has
            the all details based on you pested podcast.Description about your
            podcast which has the all details based on you pested
            podcast.Description about your podcast which has the all details
            based on you pested podcast.
          </CardDescription>
        </div>
      </div>
      <div className="flex w-full h-[150px] mx-6 mt-6 border rounded-md shadow-md p-2">
        <img
          src="/h.jpg"
          alt="No image"
          width={250}
          height={75}
          className="rounded-md shadow-md"
        />
        <div>
        <CardDescription className="pl-4 text-justify">
            2 Days ago
          </CardDescription>
          <h1 className="font-semibold text-2xl pl-4">EPISODE NO. :- 01</h1>
          <CardDescription className="pl-4 text-justify">
            Description about your podcast which has the all details based on
            you pested podcast.Description about your podcast which has the all
            details based on you pested podcast.Description about your podcast
            which has the all details based on you pested podcast.Description
            about your podcast which has the all details based on you pested
            podcast.Description about your podcast which has the all details
            based on you pested podcast.Description about your podcast which has
            the all details based on you pested podcast.Description about your
            podcast which has the all details based on you pested
            podcast.Description about your podcast which has the all details
            based on you pested podcast.
          </CardDescription>
        </div>
      </div>
    </section>
  ); 
};

export default page;