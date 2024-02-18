'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Page from '@/components/Page';

export default function yourchannel() {
 
  return (
    <div className="w-full p-10">
      {/* Header */}
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-1">
          <Image
            className="rounded-full shadow-xl"
            width="200"
            height="200"
            src="/play.jpg"
          />
        </div>
        <div className="col-span-4 p-5">
          <h2 className="flex pb-5 text-4xl font-semibold tracking-tight first:mt-0">
            Your Channel
          </h2>
          <div className="flex items-center gap-2 pb-4">
            <p>@yourchannel</p>
            <p>|</p>{/* <Separator orientation="vertical" />  */}
            <p> 1 Episode </p>
            <p>|</p>
            <p> 7 videos </p>
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
      <br />
      <hr />
      
      <Page/>
     
    </div>
  );
}
