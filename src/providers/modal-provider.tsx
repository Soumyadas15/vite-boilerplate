import { BasicModal } from "@/components/modals/basic-modal"
import { DeleteModal } from "@/components/modals/delete-modal"
import { StepModal } from "@/components/modals/step-modal"

export const ModalProvider = () => {
    return (
        <>
            <StepModal/>
            <BasicModal/>
            <DeleteModal/>
        </>
    )
}