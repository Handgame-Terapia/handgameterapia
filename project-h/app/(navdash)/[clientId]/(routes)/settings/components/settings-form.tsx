"use client";

import * as z from "zod"
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { tb_client } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { AlertModal } from "@/components/modals/alert-modal";

interface SettingsFormProps {
    initialData: tb_client;
}

const formSchema = z.object({
    name: z.string().min(1),
})

type SettingsFormValues = z.infer<typeof formSchema>;

export const SettingsForm: React.FC<SettingsFormProps> = ({
    initialData
}) => {
    const params = useParams();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useForm<SettingsFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    });

    const onSubmit = async (data: SettingsFormValues) => {
        try{
            setLoading(true);
            await axios.patch(`/api/clients/${params.clientId}`, data)
            router.refresh();
            toast.success("Cliente atualizado")
        }catch(error){
            toast.error("Algo deu errado.")
        } finally{
            setLoading(false);
        }
    }

    const onDelete = async () => {
        try{
            setLoading(true);
            await axios.delete(`/api/clients/${params.clientId}`)
            router.refresh();
            router.push("/");
            toast.success("Cliente deletado.")
        } catch(error){
            toast.error("Tenha certeza de ter removidos todos os dados")
        } finally{
            setLoading(false);
            setOpen(false);
        }
    }

    return(
        <>
        <AlertModal
            isOpen={open}
            onClose={() => setOpen(false)}
            onConfirm={onDelete}
            loading={loading}
        />
            <div className="flex items-center justify-between">
                <Heading
                    title="Settings"
                    description="Configure as preferências do cliente"
                    />
                <Button
                    disabled={loading}
                    variant="destructive"
                    size="icon"
                    onClick={() => setOpen(true)}
                    >
                    <Trash className="h-4 w-4"/>
                </Button>
            </div>
            <Separator/>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full"
                >
                    <div className="grid grid-cols-3 gap-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Nome do Cliente" {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button disabled={loading} className="ml-auto" typeof="submit">
                        Salvar alterações
                    </Button>
                </form>
            </Form>
        </>
    )
}