import { Button } from "@/components/ui/button"
import { useModal } from "@/hooks/use-modal-store"

export const Testpage = () => {

    const { onOpen } = useModal();
    return (
        <div className="flex items-center gap-4">
            <Button
                onClick={() => onOpen('stepModal')}
            >
                Step form
            </Button>

            <Button
                onClick={() => onOpen('basicModal')}
            >
                Basic form
            </Button>

            <Button
                onClick={() => onOpen('deleteModal')}
                variant={'destructive'}
            >
                Delete modal
            </Button>
        </div>
    )
}