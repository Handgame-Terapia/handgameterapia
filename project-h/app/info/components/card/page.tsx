"use client";

import { AtSign, Instagram, Twitter } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps{
    url: StaticImageData,
    nome: string,
    description: string
    tia: string
    insta: string
    twitter: string
};

const Card: React.FC<CardProps> = ({
    url,
    nome,
    description,
    tia,
    insta,
    twitter
}) => {
    return (
        <div className="flex border-2 border-white rounded-md">
            <div className="w-full">
                <div className="border-b-2 w-full">
                    <div className='w-full h-60 flex items-center justify-center'>
                        <Image
                            className="rounded-2xl"
                            src={url}
                            height={200}
                            width={200}
                            alt='profile_pic'
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start my-4">
                    <div className="flex gap-3 w-full font-bold">                    
                        <p className="text-xl ml-4">{nome}</p>
                        |
                        <p className="text-xl">{tia}</p>
                    </div>
                    <p className="text-lg font-bold ml-4">Descrição:</p>
                    <p className="text-md ml-4">{description}</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-lg mt-2 font-bold ml-4">Contatos:</p>
                        <div className="flex items-center ml-4 gap-3">
                            <AtSign/>
                            <p>Email: 32033273@mackenzista.com.br</p>
                        </div>
                        <Link className="flex items-center ml-4 gap-3"
                            href={insta}
                        >
                            <Instagram/>
                            <p>Instagram</p>
                        </Link>
                        <Link className="flex items-center ml-4 gap-3"
                            href={twitter}
                        >
                            <Twitter/>
                            <p>Twitter</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Card;