import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Modal } from "./modal"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { useCallback } from "react"
import { useModal } from "@/hooks/use-modal-store"

export const BasicModal = () => {

    const form = useForm({
        defaultValues: {
          name: "",
        },
    });

    const { isOpen, onClose, type } = useModal();

    

    const isModalOpen = isOpen && type === "basicModal"

    const handleClose = useCallback(() => {
        form.reset();
        onClose();
    }, [])
    


    const onSubmit: SubmitHandler<FieldValues> = async (data : any) => {
        console.log(data)
        onClose();
    }
    


    const bodyContent = (
        <div key="name">
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input placeholder="Book name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </Form>
        </div>
    )

    return (
        <div>
            <Modal
                title="Basic modal"
                description="This is a modal with no steps and animationss"
                onClose={handleClose}
                onSubmit={form.handleSubmit(onSubmit)}
                actionLabel="Done"
                secondaryAction={handleClose}
                secondaryActionLabel="Cancel"
                isOpen={isModalOpen}
                body={bodyContent}
            />
        </div>
    )
}