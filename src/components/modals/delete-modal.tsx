import { Modal } from "./modal"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useCallback } from "react"
import { useModal } from "@/hooks/use-modal-store"

export const DeleteModal = () => {

    const form = useForm({
        defaultValues: {
          name: "",
        },
    });

    const { isOpen, onClose, type } = useModal();

    

    const isModalOpen = isOpen && type === "deleteModal"

    const handleClose = useCallback(() => {
        form.reset();
        onClose();
    }, [])
    

    const onSubmit: SubmitHandler<FieldValues> = async () => {
        onClose();
    }
    

    return (
        <div>
            <Modal
                title="Delete modal"
                description="This is a modal with no forms and animationss"
                onClose={handleClose}
                onSubmit={form.handleSubmit(onSubmit)}
                actionLabel="Delete"
                secondaryAction={handleClose}
                secondaryActionLabel="Cancel"
                actionLabelVariant="destructive"
                isOpen={isModalOpen}
            />
        </div>
    )
}