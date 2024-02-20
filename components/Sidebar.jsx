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
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

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
    <DropdownMenuTrigger className="flex items-center pl-3 gap-3"><MdOutlineQueue/> Episode</DropdownMenuTrigger>
      <DropdownMenuContent>
      
        <DropdownMenuItem>

      <DropdownMenu>
      <DropdownMenuTrigger className="w-full flex justify-start items-center gap-2"><IoIosArrowDown className="mt-1"/> Yoga </DropdownMenuTrigger>
      <DropdownMenuContent className='pl-4'>
        <DropdownMenuItem>Episode-1</DropdownMenuItem>
        <DropdownMenuItem>Episode-2</DropdownMenuItem>
        <DropdownMenuItem>Episode-3</DropdownMenuItem>
        <DropdownMenuItem>Episode-4</DropdownMenuItem>
     </DropdownMenuContent>
     </DropdownMenu>

      </DropdownMenuItem>


        <DropdownMenuItem>

        <DropdownMenu>
      <DropdownMenuTrigger className="w-full flex justify-start gap-2"> <IoIosArrowDown className="mt-1" /> Conversation</DropdownMenuTrigger>
      <DropdownMenuContent className='pl-4'>
        <DropdownMenuItem>Episode-1</DropdownMenuItem>
        <DropdownMenuItem>Episode-2</DropdownMenuItem>
        <DropdownMenuItem>Episode-3</DropdownMenuItem>
     </DropdownMenuContent>
     </DropdownMenu>

        </DropdownMenuItem>


        <DropdownMenuItem>

        <DropdownMenu>
      <DropdownMenuTrigger className="w-full flex justify-start gap-2"> <IoIosArrowDown className="mt-1" />  Storytelling </DropdownMenuTrigger>
      <DropdownMenuContent className='pl-4'>
        <DropdownMenuItem>Episode-1</DropdownMenuItem>
        <DropdownMenuItem>Episode-2</DropdownMenuItem>
     </DropdownMenuContent>
     </DropdownMenu>

        </DropdownMenuItem>


        <DropdownMenuItem>

        <DropdownMenu>
      <DropdownMenuTrigger className="w-full flex justify-start gap-2"> <IoIosArrowDown className="mt-1" /> Motivation </DropdownMenuTrigger>
      <DropdownMenuContent className='pl-4'>
        <DropdownMenuItem>Episode-1</DropdownMenuItem>
        <DropdownMenuItem>Episode-2</DropdownMenuItem>
        <DropdownMenuItem>Episode-3</DropdownMenuItem>
        <DropdownMenuItem>Episode-4</DropdownMenuItem>
     </DropdownMenuContent>
     </DropdownMenu>

        </DropdownMenuItem>

     </DropdownMenuContent>
   </DropdownMenu>

   <ThemeToggler />
</SidebarMenu>

    </div>
  );
};
export default Sidebar