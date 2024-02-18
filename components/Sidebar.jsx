import SidebarMenu, {
  SidebarMenuChannel,
  SidebarMenuItem,
  SidebarMenuSeperator,
  SidebarMenuTitle,
  ThemeToggler,
} from "@/components/SidebarMenu";
import { LuArrowRight, LuMonitorPlay, LuTrendingUp } from "react-icons/lu";
import { HomeIcon } from "lucide-react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  MdHistory,
  MdOutlineLibraryMusic,
  MdOutlineSettings,
} from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { PiMonitorPlay } from "react-icons/pi";
import { MdOutlineSubscriptions } from "react-icons/md";

const Sidebar = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem
        icon={<HomeIcon size={20} />}
        text="Home"
        link="/"
        active={true}
        alert={false}
      />
      <SidebarMenuSeperator />
      
      <SidebarMenuItem
        icon={<MdOutlineLibraryMusic size={20} />}
        text="Library"
        link="/"
        active={true}
        alert={false}
      />




      
      <SidebarMenuItem
        icon={<AiOutlineCloudUpload size={20} />}
        text="Upload"
        link="/upload"
        active={true}
        alert={false}
      />
      
      <ThemeToggler />
    </SidebarMenu>
  );
};
export default Sidebar;