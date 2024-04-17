'use client'

import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
  } from "@/components/ui/sheet"
import { SidebarItem } from "../sidebar/sidebar-item";
import { History, MessageCircle } from "lucide-react";
import { useUtility } from "@/hooks/use-utility-store";
import { CreateProjectButton } from "../create-project-button";


export const MobileSidebar = () => {


    const { isOpen, onClose, type } = useUtility();

    const isModalOpen = isOpen && type === "mobileNav";

    return (
        <Sheet open={isModalOpen} onOpenChange={onClose}>
            <SheetContent side={'left'} className="w-56 flex flex-col px-4 pb-10 justify-between">
                <SheetHeader className="text-start mb-5">
                
                </SheetHeader>
                <div className="gap-4 h-full flex flex-col items-start">
                    <CreateProjectButton/>
                    <SidebarItem 
                        icon={<MessageCircle strokeWidth={2}/>} 
                        label="Conversation" 
                        color="text-violet-500"
                        route="/"
                        isActive
                    />
                    <SidebarItem 
                        icon={<History strokeWidth={2}/>} 
                        label="History" 
                        color="text-green-500"
                        route="/history"
                        isActive={false}
                    />
                </div>
                <SheetFooter className="">
                    {/* {secondaryActionLabel && (
                        <Button variant={'outline'} onClick={secondaryAction}>
                            {secondaryActionLabel}
                        </Button>
                    )}
                    <Button type="submit" onClick={onSubmit}>{actionLabel}</Button> */}
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}