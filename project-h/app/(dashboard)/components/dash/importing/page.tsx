import prismadb from "@/lib/prismadb";

export default async function getInfo(){
    const information = await prismadb.dedos.findMany();
    return information;
}