import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request,
    { params }: {params: {clientId: string}}
) {
    try{
        const { userId } = auth();
        const body = await req.json();

        const { name } = body;

        if(!userId){
            return new NextResponse("Não autenticada", {status: 401})
        }

        if(!name){
            return new NextResponse("Precisa de um nome", {status: 400})
        }

        if(!params.clientId){
            return new NextResponse("É necessário um id Cliente", {status: 400})
        }

        const client = await prismadb.tb_client.updateMany({
            where:{
                id: params.clientId,
                userId
            },
            data: {
                name
            }
        })

        return NextResponse.json(client)
    } catch(error){
        console.error('[CLIENT_PATCH]', error)
        return new NextResponse("Internal Error" , {status: 500})
    }
};

export async function DELETE(
    req: Request,
    { params }: {params: {clientId: string}}
) {
    try{
        const { userId } = auth();

        if(!userId){
            return new NextResponse("Não autenticada", {status: 401})
        }

        if(!params.clientId){
            return new NextResponse("É necessário um id Cliente", {status: 400})
        }

        const client = await prismadb.tb_client.deleteMany({
            where:{
                id: params.clientId,
                userId
            }
        })

        return NextResponse.json(client)
    } catch(error){
        console.error('[CLIENT_DELETE]', error)
        return new NextResponse("Internal Error" , {status: 500})
    }
};