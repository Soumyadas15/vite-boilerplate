import { History, MessageCircle } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { CreateProjectButton } from "../create-project-button";

export const Sidebar = () => {

  return (
    <div className="hidden shadow-sm lg:flex transition duration-300 flex-col items-start justify-between w-full h-full px-4 py-4 shadow-r-lg dark:shadow-none border-r-[1px] dark:border-gray-800  text-white">
        <div className="h-[86%] w-full flex flex-col items-center gap-4">
            <CreateProjectButton/>
            <SidebarItem 
                icon={<MessageCircle strokeWidth={2}/>} 
                label="Projects" 
                color="text-violet-500"
                route="/"
                isActive
            />
            <SidebarItem 
                icon={<History strokeWidth={2}/>} 
                label="Dashboard" 
                color="text-green-500"
                route="/history"
                isActive = {false}
            />
        </div>
    </div>
  );
};