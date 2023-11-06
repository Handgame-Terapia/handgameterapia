"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Check, ChevronsUpDown, PlusCircle, UserCircle2 } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useClientModal } from "@/hooks/use-client-modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface ClientSwitcherProps extends PopoverTriggerProps{
    items: {
        name: string,
        id: string,
    }[];
}

export default function ClientSwitcher({
    className,
    items = []
} : ClientSwitcherProps){
    const clientModal = useClientModal();
    const params = useParams();
    const router = useRouter();

    const formattedItems = items.map((item) => ({
        label: item.name,
        value: item.id
    }))

    const currentClient = formattedItems.find((item) => item.value === params.clientId);

    const [open, setOpen] = useState(false);

    const onClientSelect = (client: {value: string, label: string}) =>{
        setOpen(false);
        router.push(`/${client.value}`);
    }

    return(
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button 
                variant="outline" 
                size="sm" 
                role="combobox" 
                aria-label="Selecione um cliente" 
                className={cn("w-[200px] justify-between", className)}>
                    <UserCircle2 className="mr-2 h-4 w-4"/>
                    {currentClient?.label}
                    <ChevronsUpDown className="ml-auto h-4 w-4 shirenk-0 opacity-50"/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandList>
                        <CommandInput placeholder="Procure um cliente"/>
                        <CommandEmpty>Nenhum cliente encontrado.</CommandEmpty>
                        <CommandGroup heading="Clintes">
                            {formattedItems.map((client) => (
                                <CommandItem
                                key={client.value}
                                onSelect={() => onClientSelect(client)}
                                className="text-sm"
                                >
                                    <UserCircle2 className="mr-2 h-4 w-4"/>
                                    {client.label}
                                    <Check className={cn(
                                        "ml-auto h-4 w-4",
                                        currentClient?.value===client.value
                                        ?"opacity-100"
                                        :"opacity-0"
                                    )}/>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                    <CommandSeparator/>
                    <CommandList>
                        <CommandGroup>
                            <CommandItem
                            onSelect={() => {
                                setOpen(false);
                                clientModal.onOpen();
                            }}
                            >
                                <PlusCircle className="mr-2 h-5 w-5"/>
                                Crie um cliente
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}