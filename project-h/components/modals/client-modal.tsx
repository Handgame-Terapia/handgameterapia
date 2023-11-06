"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { useClientModal } from "@/hooks/use-client-modal";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(1),
});

export const ClientModal = () => {
    const clientModal = useClientModal();

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        }
    })

    const onSubmit = async(values: z.infer<typeof formSchema>) => {
        try{
            setLoading(true);

            const response = await axios.post('/api/clients', values);

            window.location.assign(`/${response.data.id}`);
        } catch (error) {
            toast.error("Algo deu errado");
        } finally {
            setLoading(false);
        }
    }

    return(
        <Modal
            title="Crie um cliente"
            description="Adicione um cliente"
            isOpen={clientModal.isOpen}
            onClose={clientModal.onClose}
        >
            <div>
                <div className="space-y-4 py-4 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="Clientes" {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                                    <Button disabled={loading} variant="outline" onClick={clientModal.onClose}>
                                        Cancelar
                                    </Button>
                                    <Button  disabled={loading} type="submit">
                                        Continuar
                                    </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}