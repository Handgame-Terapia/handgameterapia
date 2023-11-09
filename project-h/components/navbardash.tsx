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
        <div className="bg-black text-neutral-300 border-b px-4">
            <div className="flex h-16 items-center p-4 md:px-14">
                <ClientSwitcher items={client}/>
                <div>
                    <MainDashNav className="mx-6"/>
                </div>
            </div>
        </div>
    );
}
 
export default NavbarDash;