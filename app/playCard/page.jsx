'use client'
import ImageWithPlayIcon from "@/components/ImageWithPlayIcon";
import SongPlay from "@/components/Songplay";
import { CardContent, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { IoArrowBackOutline} from "react-icons/io5";
import Link from "next/link";
import { TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

const page = () => {
 
return (
    <section className=" border m-10">
      {/* <head>
        <meta name="twitter:card" content="summary_large-image"/>
        <meta name="twitter:site" content="@gokul"/>
        <meta name="twitter:url" content={`https:www.kgdatasolutions.netlify.com//`}/>
        <meta name="" content=""/>
        <meta name="" content=""/>
      </head> */}
       <Button variant='outline' className =' m-2'><Link href='/playlist' className="flex items-center gap-1" >
        <IoArrowBackOutline className="w-4 h-4"/> Back</Link></Button>
      
       <TwitterShareButton url={`https://kgdatasolutions.netlify.com`}>
         <Button><TwitterIcon className="w-5 h-5"/>share on twitter</Button>
      </TwitterShareButton>
      {/* <div>
      <WhatsappShareButton url={`https://localhost:3000`} >
        <Button><WhatsappIcon className="w-5 h-5"/></Button>
      </WhatsappShareButton>  
      </div> */}
      <div className=" flex items-center m-4">
        <Image
          src="/yogagirl.jpg"
          alt="No image"
          width="200"
          height="200"
          priority
          className="rounded-md "
        />
        <div className=" bottom-0 text-white rounded-md">
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

      <h1 className=" text-2xl border-t rounded-md mt-4 pl-8 pt-4 pb-2 font-semibold ">EPISODES</h1>

      <div className="p-2">
      <ScrollArea className='h-[420px]'>
        <div className="flex h-[180px] w-[1380px] mx-6 mt-6  border justify-between items-center rounded-md shadow-md p-4">
          <ImageWithPlayIcon
            src="/podcast.jpg"
            alt="No image"
            width='600'            //note when we use ImageWithPlayIcon it width need to be bigger.
            height='40'
            className="rounded-md shadow-md"
          />
          
          <div className="">
            <CardDescription className="pl-4 text-justify">
              Today
            </CardDescription>
            <h1 className="font-semibold text-2xl pl-4">EPISODE NO. :- 05</h1>
            <CardDescription className="pl-4 text-justify ">
              Description about your podcast which has the all details based on
              you pested podcast.Description about your podcast which has the
              all details based on you pested podcast.Description about your
              podcast which has the all details based on you pested
              podcast.Description about your podcast which has the all details
              based on you pested podcast.Description about your podcast which
              has the all details based on you pested podcast.Description about
              your podcast which has the all details based on you pested
              podcast.Description about your podcast which has the all details
              based on you pested podcast.Description about your podcast which
              has the all details based on you pested podcast.
            </CardDescription>
          </div>
        </div>

        <div className="flex h-[180px] w-[1380px] mx-6 mt-6  border justify-between items-center rounded-md shadow-md p-4">
          <ImageWithPlayIcon
            src="/podcast.jpg"
            alt="No image"
            width='600'
            height='40'
            className="rounded-md shadow-md"
          />
          
          <div className="">
            <CardDescription className="pl-4 text-justify">
              Today
            </CardDescription>
            <h1 className="font-semibold text-2xl pl-4">EPISODE NO. :- 04</h1>
            <CardDescription className="pl-4 text-justify ">
              Description about your podcast which has the all details based on
              you pested podcast.Description about your podcast which has the
              all details based on you pested podcast.Description about your
              podcast which has the all details based on you pested
              podcast.Description about your podcast which has the all details
              based on you pested podcast.Description about your podcast which
              has the all details based on you pested podcast.Description about
              your podcast which has the all details based on you pested
              podcast.Description about your podcast which has the all details
              based on you pested podcast.Description about your podcast which
              has the all details based on you pested podcast.
            </CardDescription>
          </div>
        </div>

        <div className="flex h-[180px] w-[1380px] mx-6 mt-6  border justify-between items-center rounded-md shadow-md p-4">
          <ImageWithPlayIcon
            src="/podcast.jpg"
            alt="No image"
            width='600'
            height='40'
            className="rounded-md shadow-md"
          />
          
          <div className="">
            <CardDescription className="pl-4 text-justify">
              Today
            </CardDescription>
            <h1 className="font-semibold text-2xl pl-4">EPISODE NO. :- 03</h1>
            <CardDescription className="pl-4 text-justify ">
              Description about your podcast which has the all details based on
              you pested podcast.Description about your podcast which has the
              all details based on you pested podcast.Description about your
              podcast which has the all details based on you pested
              podcast.Description about your podcast which has the all details
              based on you pested podcast.Description about your podcast which
              has the all details based on you pested podcast.Description about
              your podcast which has the all details based on you pested
              podcast.Description about your podcast which has the all details
              based on you pested podcast.Description about your podcast which
              has the all details based on you pested podcast.
            </CardDescription>
          </div>
        </div>

        <div className="flex h-[180px] w-[1380px] mx-6 mt-6  border justify-between items-center rounded-md shadow-md p-4">
          <ImageWithPlayIcon
            src="/podcast.jpg"
            alt="No image"
            width='600'
            height='40'
            className="rounded-md shadow-md"
          />
          
          <div className="">
            <CardDescription className="pl-4 text-justify">
              Today
            </CardDescription>
            <h1 className="font-semibold text-2xl pl-4">EPISODE NO. :- 02</h1>
            <CardDescription className="pl-4 text-justify ">
              Description about your podcast which has the all details based on
              you pested podcast.Description about your podcast which has the
              all details based on you pested podcast.Description about your
              podcast which has the all details based on you pested
              podcast.Description about your podcast which has the all details
              based on you pested podcast.Description about your podcast which
              has the all details based on you pested podcast.Description about
              your podcast which has the all details based on you pested
              podcast.Description about your podcast which has the all details
              based on you pested podcast.Description about your podcast which
              has the all details based on you pested podcast.
            </CardDescription>
          </div>
        </div>

        <div className="flex h-[180px] w-[1380px] mx-6 mt-6  border justify-between items-center rounded-md shadow-md p-4">
          <ImageWithPlayIcon
            src="/podcast.jpg"
            alt="No image"
            width='600'
            height='40'
            className="rounded-md shadow-md"
          />
          
          <div className="">
            <CardDescription className="pl-4 text-justify">
              Today
            </CardDescription>
            <h1 className="font-semibold text-2xl pl-4">EPISODE NO. :- 01</h1>
            <CardDescription className="pl-4 text-justify ">
              Description about your podcast which has the all details based on
              you pested podcast.Description about your podcast which has the
              all details based on you pested podcast.Description about your
              podcast which has the all details based on you pested
              podcast.Description about your podcast which has the all details
              based on you pested podcast.Description about your podcast which
              has the all details based on you pested podcast.Description about
              your podcast which has the all details based on you pested
              podcast.Description about your podcast which has the all details
              based on you pested podcast.Description about your podcast which
              has the all details based on you pested podcast.
            </CardDescription>
          </div>
        </div>
        
      </ScrollArea>
      {/* <div className="pb-5">
      <SongPlay/>
      </div> */}
      </div>
      
    </section>
  );
};

export default page;
