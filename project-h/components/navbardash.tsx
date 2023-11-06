import { MainDashNav } from "@/components/main-dash-nav";
import ClientSwitcher from "@/components/client-switcher";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const NavbarDash = async () => {
    const { userId } = auth();

    if(!userId){
        redirect("/sign-in");
    }

    const client = await prismadb.tb_client.findMany({
        where: {
            userId,
        },
    });
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <ClientSwitcher items={client}/>
                <div>
                    <MainDashNav className="mx-6"/>
                </div>
            </div>
        </div>
    );
}
 
export default NavbarDash;