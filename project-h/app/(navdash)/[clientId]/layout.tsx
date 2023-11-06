import NavbarDash from "@/components/navbardash";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { clientId: string}
}) {
    const { userId } = auth();

    if(!userId){
        redirect('/sign-in');
    }

    const client = await prismadb.tb_client.findFirst({
        where: {
            id: params.clientId,
            userId
        }
    });

    if(!client){
        redirect('/home');
    }

    return(
        <>
            <NavbarDash />
            {children}
        </>
    )
}