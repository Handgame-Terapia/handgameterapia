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
    insta_nick: string
    twitter: string
    twitter_nick: string
};

const Card: React.FC<CardProps> = ({
    url,
    nome,
    description,
    tia,
    insta,
    insta_nick,
    twitter,
    twitter_nick
}) => {
    return (
        <div className="bg-bgc-card rounded-lg grid grid-rows-3 p-4 gap-4">
            <div className="flex justify-center">
                <Image
                    className="rounded-lg bg-cover w-60 h-60"
                    src={url}
                    height={200}
                    width={200}
                    alt="profile_pic"
                />
            </div>
            <div className="flex justify-start flex-col gap-4">
                <div className="text-center">
                    <h1 className="text-2xl">{nome}</h1>
                    <p className="text-md text-neutral-500">{tia}</p>
                </div>
                <div className="text-center">
                    <p>{description}</p>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-4 pt-4">
                <div className="flex items-center ml-4 gap-3">
                    <AtSign/>
                    <p>{tia}@mackenzista.com.br</p>
                </div>
                <Link className="flex items-center ml-4 gap-3"
                    href={insta}
                >
                    <Instagram/>
                    <p>{insta_nick}</p>
                </Link>
                <Link className="flex items-center ml-4 gap-3"
                        href={twitter}
                >
                    <Twitter/>
                    <p>{twitter_nick}</p>
                </Link>
            </div>
        </div>
    );
}
 
export default Card;