interface SidebarItemProps {
    label: string;
    icon?: React.ReactNode;
    route?: string;
    color?: string;
    isActive?: boolean;
}

export const SidebarItem = ({
    label,
    icon,
    isActive,
} : SidebarItemProps) => {


    return (
        <div 
            className={`
                 transition 
                 duration-300 
                 h-10 
                 w-full 
                 rounded-md 
                 flex 
                 items-center 
                 p-4
                 px-4 
                 hover:cursor-pointer
                 hover:opacity-70
                 ${isActive ? 'bg-neutral-200 dark:bg-blue-900/60 ' : 'bg-transparent'}
            `}>
            <div className="flex items-center gap-3">
                <div className={`
                    ${isActive ? 'text-blue-500' : 'text-black dark:text-neutral-500'}
                `}>{icon}</div>
                <p className={`
                        text-md 
                        text-black 
                        dark:text-neutral-400
                    `
                }>{label}</p>
            </div>

        </div>
    )
}