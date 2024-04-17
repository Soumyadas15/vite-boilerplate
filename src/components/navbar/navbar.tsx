import { MenuIcon } from "lucide-react"
import { ThemeToggle } from "../toggles/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { useUtility } from "@/hooks/use-utility-store"

export const Navbar = () => {

    const { onOpen } = useUtility();

    return (
        <div className="h-16 w-full border-b-[1px] border-neutral-200 shadow-sm dark:border-gray-800 transition duration-300 fixed flex items-center justify-between px-8">
            <div className="flex items-center gap-3">
                <div className="text-2xl font-bold">
                    LOGO
                </div>
                <Button 
                    size={'sm'} 
                    variant={'outline'} 
                    className="block lg:hidden"
                    onClick={() => onOpen('mobileNav')}
                >
                    <MenuIcon/>
                </Button>
            </div>
            
            <div className="w-[6rem] flex items-center justify-between">
                <ThemeToggle/>
                <Avatar>\
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}