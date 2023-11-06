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
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SettingsForm initialData={client} />
            </div>
        </div>
     );
}
 
export default SettingsPage;