import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { SettingsForm } from "./components/settings-form";

interface SettingsPageProps{
    params: {
        clientId: string,
    }
};

const SettingsPage: React.FC<SettingsPageProps> = async ({
    params
}) => {
    const { userId } = auth();

    if(!userId){
        redirect('/sign-in')
    }

    const client = await prismadb.tb_client.findFirst({
        where: {
            id: params.clientId,
            userId
        }
    })

    if(!client){
        redirect("/navdash")
    }

    return ( 
        <div className="p-4 flex-col bg-black text-neutral-300">
            <div className="flex-1 space-y-4 px-14 pt-6">
                <SettingsForm initialData={client} />
            </div>
        </div>
     );
}
 
export default SettingsPage;