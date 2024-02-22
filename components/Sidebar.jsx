'use client'
import React, { useState } from 'react';
import SidebarMenu, {
  SidebarMenuChannel,
  SidebarMenuItem,
  SidebarMenuSeperator,
  SidebarMenuTitle,
  ThemeToggler,
} from "@/components/SidebarMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {MdOutlineQueue} from "react-icons/md";
import { HomeIcon } from "lucide-react";
import { AiOutlineCloudUpload , AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDown , IoIosArrowForward  } from "react-icons/io";
import Link from "next/link";


const Sidebar = () => {
  return (
    <div className="">

      
    <SidebarMenu>

      {/* home */}
      <SidebarMenuItem
        icon={<HomeIcon size={20} />}
        text="Home"
        link="/"
        active={true}
        alert={false}
      />

      <SidebarMenuSeperator />
      
      {/* <SidebarMenuItem
        icon={<MdOutlineLibraryMusic size={20} />}
        text="Library"
        link="/"
        active={true}
        alert={false}
      /> */}

      {/* upload */}
      <SidebarMenuItem
        icon={<AiOutlineCloudUpload size={20} />}
        text="Upload"
        link="/upload"
        active={true}
        alert={false}
      />
      
    
    <DropdownMenu className=''>
    <DropdownMenuTrigger className="flex items-center pl-3 gap-3"><MdOutlineQueue/> Podcasts</DropdownMenuTrigger>
      <DropdownMenuContent className='ml-2 pl-1'>
      
        <DropdownMenuItem>

      <DropdownMenu>         
      <DropdownMenuTrigger className="w-full flex justify-start gap-2"> <IoIosArrowDown className="mt-1" /> Milky Way </DropdownMenuTrigger>             
      <DropdownMenuContent className='pl-4 absolute left-[65px] '>
        <DropdownMenuItem>Episode-1</DropdownMenuItem>
        <DropdownMenuItem>Episode-2</DropdownMenuItem>
        <DropdownMenuItem>Episode-3</DropdownMenuItem>
        <DropdownMenuItem>Episode-4</DropdownMenuItem>
        <DropdownMenuItem className=''>
          <Link href='/upload/episode' target='' className="flex w-full "><AiOutlinePlusCircle className="w-5 h-5"/></Link>
        </DropdownMenuItem>
     </DropdownMenuContent>
     </DropdownMenu>

      </DropdownMenuItem>


        <DropdownMenuItem>

        <DropdownMenu>
      <DropdownMenuTrigger className="w-full flex justify-start gap-2"> <IoIosArrowDown className="mt-1" /> Sunrise </DropdownMenuTrigger>
      <DropdownMenuContent className='pl-4 absolute left-[65px]'>
        <DropdownMenuItem>Episode-1</DropdownMenuItem>
        <DropdownMenuItem>Episode-2</DropdownMenuItem>
        <DropdownMenuItem>Episode-3</DropdownMenuItem>
        <DropdownMenuItem className=''>
          <Link href='/upload/episode' target='' className="flex w-full "><AiOutlinePlusCircle className="w-5 h-5"/></Link>
        </DropdownMenuItem>
     </DropdownMenuContent>
     </DropdownMenu>

        </DropdownMenuItem>


        <DropdownMenuItem>

        <DropdownMenu>
      <DropdownMenuTrigger className="w-full flex justify-start gap-2"> <IoIosArrowDown className="mt-1" />  Freedom </DropdownMenuTrigger>
      <DropdownMenuContent className='pl-4 absolute left-[65px]'>
        <DropdownMenuItem>Episode-1</DropdownMenuItem>
        <DropdownMenuItem>Episode-2</DropdownMenuItem>
        <DropdownMenuItem className=''>
          <Link href='/upload/episode' target='' className="flex w-full "><AiOutlinePlusCircle className="w-5 h-5"/></Link>
        </DropdownMenuItem>
     </DropdownMenuContent>
     </DropdownMenu>

        </DropdownMenuItem>


        <DropdownMenuItem>

        <DropdownMenu>
      <DropdownMenuTrigger className="w-full flex justify-start gap-2"> <IoIosArrowDown className="mt-1" /> Music </DropdownMenuTrigger>
      <DropdownMenuContent className='pl-4 absolute left-[65px]'>
        <DropdownMenuItem>Episode-1</DropdownMenuItem>
        <DropdownMenuItem>Episode-2</DropdownMenuItem>
        <DropdownMenuItem>Episode-3</DropdownMenuItem>
        <DropdownMenuItem>Episode-4</DropdownMenuItem>
        <DropdownMenuItem className=''>
          <Link href='/upload/episode' target='' className="flex w-full "><AiOutlinePlusCircle className="w-5 h-5"/></Link>
        </DropdownMenuItem>
     </DropdownMenuContent>
     </DropdownMenu>

        </DropdownMenuItem>

        <DropdownMenuItem className=''>
          <Link href='/upload' target='' className="flex w-full "><AiOutlinePlusCircle className="w-5 h-5"/></Link>
        </DropdownMenuItem>

     </DropdownMenuContent>
   </DropdownMenu>

   <ThemeToggler />
</SidebarMenu>

    </div>
  );
};
export default Sidebar