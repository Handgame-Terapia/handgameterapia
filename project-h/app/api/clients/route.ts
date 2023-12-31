import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
) {
    try {
        const { userId } = auth();
        const body = await req.json();

        const { name } = body;

        if (!userId) {
            return new NextResponse("Não autorizado", { status: 401 });
        }

        if (!name) {
            return new NextResponse("Precisa de um nome", { status: 400 });
        }

        const client = await prismadb.tb_client.create({
            data: {
                name,
                userId,
                workout: {
                    create: {
                    }
                }
            }
        });

        return NextResponse.json(client);

    } catch (error) {
        console.error('[CLIENT_POST]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}