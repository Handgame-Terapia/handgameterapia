import * as React from "react"
import { BarChart4, BarChartBig, BookOpenCheck, Home, Info, LogOut, Menu, MessagesSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { UserButton, auth } from "@clerk/nextjs";
import Logo from "@/public/logo.png";
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const NavbarLoged = () => {
    const { userId } = auth();
    return ( 
        <div className="sticky md:static top-0 border-b grid grid-cols-2 md:grid-cols-6 bg-neutral-800">
            <div className="flex items-center">
                <Link href="/home" className="flex items-center mx-5 my-2 gap-3">
                    <Image 
                        src={Logo}
                        width={40}
                        height={40}
                        alt="Logo"
                        />
                    <h1 className="
                    flex items-center 
                    text-3xl font-mono text-sky-400 hover:text-sky-600"
                    >
                        Handgame
                    </h1>
                </Link>
            </div>
            {userId ? (                
                <div className="
                hidden md:flex justify-center items-center col-start-2 col-span-4"
                >
                    <div className="grid grid-cols-5 md:gap-4">
                        <Link href="/home">
                            <Button className="
                            bg-teal-200 text-zinc-600 gap-1 md:w-24
                            hover:bg-teal-400 hover:text-white hover:-mt-1">
                                <Home className="w-5 h-5 mb-1 shirenk-0"/>
                                Home
                            </Button>
                        </Link>
                        <Link href="../documents">
                            <Button className="
                            bg-cyan-200 text-zinc-600 gap-1 w-24
                            hover:bg-cyan-500 hover:text-white hover:-mt-1">
                                <BookOpenCheck className="w-5 h-5 shirenk-0"/>
                                Docs
                            </Button>
                        </Link>
                        <Link href="../info">
                            <Button className="
                            bg-sky-200 text-zinc-600 gap-1 w-24
                            hover:bg-sky-500 hover:text-white hover:-mt-1">
                                <Info className="w-5 h-5 shirenk-0"/>
                                Info
                            </Button>
                        </Link>
                        <Link href="../faq">    
                            <Button className="
                            bg-blue-300 text-zinc-600 gap-1 w-24
                            hover:bg-blue-400 hover:text-white hover:-mt-1">
                                <MessagesSquare className="w-5 h-5 shirenk-0"/>
                                FAQs
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button className="
                            bg-indigo-300 text-zinc-600 gap-1 w-24
                            hover:bg-indigo-400 hover:text-white hover:-mt-1">
                                <BarChartBig className="w-5 h-5 shirenk-0"/>
                                Dash
                            </Button>
                        </Link>
                    </div>
                </div>)
                :
                (                
                <div className="
                    hidden md:flex justify-center items-center col-start-3 col-end-4"
                >
                    <div className="grid grid-cols-5 gap-4">
                        <Link href="/home">
                            <Button className="
                            bg-teal-200 text-zinc-600 gap-1 w-full
                            hover:bg-teal-400 hover:text-white hover:-mt-1">
                                <Home className="w-5 h-5 mb-1 shirenk-0"/>
                                Home
                            </Button>
                        </Link>
                        <Link href="../documents">
                            <Button className="
                            bg-cyan-200 text-zinc-600 gap-1 w-full
                            hover:bg-cyan-500 hover:text-white hover:-mt-1">
                                <BookOpenCheck className="w-5 h-5 shirenk-0"/>
                                Docs
                            </Button>
                        </Link>
                        <Link href="../info">
                            <Button className="
                            bg-sky-200 text-zinc-600 gap-1 w-full
                            hover:bg-sky-500 hover:text-white hover:-mt-1">
                                <Info className="w-5 h-5 shirenk-0"/>
                                Info
                            </Button>
                        </Link>
                        <Link href="../faq">    
                            <Button className="
                            bg-blue-300 text-zinc-600 gap-1 w-full
                            hover:bg-blue-400 hover:text-white hover:-mt-1">
                                <MessagesSquare className="w-5 h-5 shirenk-0"/>
                                FAQs
                            </Button>
                        </Link>
                    </div>
                </div>)
                }
            <div className="
            flex justify-end items-center mr-5"
            >
                <div className="hidden md:flex">
                    <div className="flex gap-3">
                        <UserButton
                            afterSignOutUrl="/home"
                        />
                    </div>
                </div>
                <div className="flex items-center md:hidden">
                    <Popover>
                        <PopoverTrigger>
                            <Menu className="h-8 w-8 text-white" />
                        </PopoverTrigger>
                        <PopoverContent className="flex flex-col gap-2">
                            <Link href="/home" className="flex items-center gap-2">
                                <Home/>
                                <p className="mt-1 text-neutral-300">Home</p>
                            </Link>
                            <Link href="/documents" className="flex items-center gap-2">
                                <BookOpenCheck/>
                                <p className="text-neutral-300">Documentação</p>
                            </Link>
                            <Link href="/info" className="flex items-center gap-2">
                                <Info/>
                                <p className="text-neutral-300">Informações</p>
                            </Link>
                            {userId? (
                                <Link href="/" className="flex items-center gap-2">
                                    <BarChart4/>
                                    <p className="mt-1 text-neutral-300">Dashboard</p>
                                </Link>
                            ):(
                                <></>
                            )}
                            <Link href="/faq" className="flex items-center gap-2 pb-2 border-b">
                                <MessagesSquare/>
                                <p className="mt-1 text-neutral-300">FAQ</p>
                            </Link>
                            <div className="flex items-center justify-center">
                                <UserButton
                                    afterSignOutUrl="/home"
                                />
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
}
 
export default NavbarLoged;