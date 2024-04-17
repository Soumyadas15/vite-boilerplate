import { useModal } from "@/hooks/use-modal-store"
import { Button } from "./ui/button"
import { Plus } from "lucide-react";

export const CreateProjectButton = () => {

    const { onOpen } = useModal();

    return (
        <Button 
            className="w-full flex items-center gap-1"
            onClick={() => onOpen('stepModal')}
        >
            <Plus/>
            Create Project
        </Button>
    )
}