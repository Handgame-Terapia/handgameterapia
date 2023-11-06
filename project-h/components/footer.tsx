import { BarChartBig, BookOpenCheck, Facebook, Github, Info, Instagram, MessagesSquare, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "@clerk/nextjs";

const Footer = () => {
    const { userId } = auth();
    return (
        <footer className="border-t bg-neutral-800 text-zinc-300 py-10">
            <div className="grid grid-cols-3 text-center">
                { userId ? (
                    <div>
                    <p className="font-bold">Navegação</p>
                    <div className="grid grid-rows-3 gap-5 mt-5">
                    <Link href="../documents">
                        <Button className="
                        bg-cyan-200 text-zinc-600 gap-1 px-10
                        hover:bg-cyan-500 hover:text-white hover:-mt-1">
                            <BookOpenCheck className="w-5 h-5"/>
                            Docs
                        </Button>
                    </Link>
                    <Link href="../info">
                        <Button className="
                        bg-sky-200 text-zinc-600 gap-1 px-10
                        hover:bg-sky-500 hover:text-white hover:-mt-1">
                            <Info className="w-5 h-5"/>
                            Info
                        </Button>
                    </Link>
                    <Link href="../faq">    
                        <Button className="
                        bg-blue-300 text-zinc-600 gap-1 px-10
                        hover:bg-blue-400 hover:text-white hover:-mt-1">
                            <MessagesSquare className="w-5 h-5"/>
                            FAQs
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button className="
                        bg-blue-300 text-zinc-600 gap-1 px-10
                        hover:bg-blue-400 hover:text-white hover:-mt-1">
                                <BarChartBig className="w-5 h-5"/>
                                Dash
                            </Button>
                        </Link>
                    </div>
                </div>
                ) : (
                <div>
                    <p className="font-bold">Navegação</p>
                    <div className="grid grid-rows-3 gap-5 mt-5">
                    <Link href="../documents">
                        <Button className="
                        bg-cyan-200 text-zinc-600 gap-1 px-10
                        hover:bg-cyan-500 hover:text-white hover:-mt-1">
                            <BookOpenCheck className="w-5 h-5"/>
                            Docs
                        </Button>
                    </Link>
                    <Link href="../info">
                        <Button className="
                        bg-sky-200 text-zinc-600 gap-1 px-10
                        hover:bg-sky-500 hover:text-white hover:-mt-1">
                            <Info className="w-5 h-5"/>
                            Info
                        </Button>
                    </Link>
                    <Link href="../faq">    
                        <Button className="
                        bg-blue-300 text-zinc-600 gap-1 px-10
                        hover:bg-blue-400 hover:text-white hover:-mt-1">
                            <MessagesSquare className="w-5 h-5"/>
                            FAQs
                        </Button>
                    </Link>
                    </div>
                </div>
                )}
                <div>
                    <p className="font-bold">Handgame</p>
                    <p className="hidden md:flex">
                        O grupo Handgame Terapia tem a honra de conduzir um experimento
                        no qual testamos a efetividade de uma de reabilitação motora 
                        dos movimentos finos da mão por meio da gameterapia, possibilitada
                        por uma criação nossa. Uma luva fisioterapeutica com a capacidade de
                        transformar qualquer jogo com entrar de tecla em um jogo categorizado
                        como jogo sério, com a função de melhorar as movimentações das articulações
                        das mãos.
                    </p>
                    <p className="flex md:hidden">
                        O grupo Handgame Terapia tem a honra de conduzir um experimento
                        sobre a gameterapia e o desenvolvimento do nosso próprio hardwares
                    </p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <div className="grid grid-rows-4 gap-2">
                        <p className="font-bold">Social Medias</p>
                        <div className="flex flex-row items-center text-center text-slate-100 hover:text-sky-600">
                            <Link href="https://www.instagram.com/handgameterapia" className="w-full flex gap-2 justify-center text-center">
                                <Instagram className="h-6 w-6"/>
                                <p>| Instragram</p>
                            </Link>
                        </div>
                        <div className="flex justify-start text-slate-100 hover:text-sky-600">
                            <Link href="/" className="w-full flex gap-2 justify-center text-center">
                                <Facebook className="h-6 w-6 flex"/>
                                <p>| Facebook</p>
                            </Link>
                        </div>
                        <div className="flex justify-start text-slate-100 hover:text-sky-600">
                            <Link href="https://twitter.com/HandGameterapia" className="w-full flex gap-2 justify-center text-center">
                                <Twitter className="h-6 w-6"/>
                                <p>| Twitter</p>
                            </Link>
                        </div>
                        <div className="flex flex-row items-center text-center text-slate-100 hover:text-sky-600">
                            <Link href="https://github.com/Handgame-Terapia" className="w-full flex gap-2 justify-center text-center">
                                <Github className="h-6 w-6"/>
                                <p>| Github</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto py-10">
                <p className="text-center text-sm">&copy; 2023 Handgame Terapia. Todos direitos reservados.</p>
            </div>
        </footer>
    );
}
 
export default Footer;