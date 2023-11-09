import { BarChartBig, BookOpenCheck, Facebook, Github, Info, Instagram, MessagesSquare, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "@clerk/nextjs";

const Footer = () => {
    const { userId } = auth();
    return (
        <>
            <footer className="bg-bgc-nav text-neutral-300 p-4 md:px-14 text-lg">
                <div className="flex flex-col md:flex-row justify-between items-start px-6 w-full h-full gap-4">
                    {userId ? (
                        <div className="flex flex-col md:items-start justify-center gap-4 md:w-1/3 w-full items-center">
                            <p className="font-bold text-2xl pl-3">Navegação</p>
                            <Link href="../documents" className="w-full">
                                <Button
                                    className="md:w-1/4 w-full flex justify-center
                                    transition ease-in-out delay-150 bg-cyan-200 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300">
                                    <BookOpenCheck className="w-5 h-5"/>
                                    <p className="text-lg">Docs</p>
                                </Button>
                            </Link>
                            <Link href="../info" className="w-full">
                                <Button
                                    className="md:w-1/4 w-full flex justify-center
                                    transition ease-in-out delay-150 bg-sky-200 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300">
                                    <Info className="w-5 h-5"/>
                                    <p className="text-lg">Info</p>
                                </Button>
                            </Link>
                            <Link href="../faq" className="w-full">
                                <Button
                                    className="md:w-1/4 w-full flex justify-center
                                    transition ease-in-out delay-150 bg-blue-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">
                                    <MessagesSquare className="w-5 h-5"/>
                                    <p className="text-lg">FAQs</p>
                                </Button>
                            </Link>
                            <Link href="/" className="w-full">
                                <Button
                                    className="md:w-1/4 w-full flex justify-center
                                    transition ease-in-out delay-150 bg-indigo-300 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300">
                                    <BarChartBig className="w-5 h-5"/>
                                    <p className="text-lg">Dash</p>
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col md:items-start justify-center gap-4 md:w-1/3 w-full items-center">
                            <p className="font-bold text-2xl">Navegação</p>
                            <Link href="../documents" className="w-full">
                                <Button
                                    className="md:w-1/4 w-full flex justify-center
                                    transition ease-in-out delay-150 bg-cyan-200 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300">
                                    <BookOpenCheck className="w-5 h-5"/>
                                    <p className="text-lg">Docs</p>
                                </Button>
                            </Link>
                            <Link href="../info" className="w-full">
                                <Button
                                    className="md:w-1/4 w-full flex justify-center
                                    transition ease-in-out delay-150 bg-sky-200 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300">
                                    <Info className="w-5 h-5"/>
                                    <p className="text-lg">Info</p>
                                </Button>
                            </Link>
                            <Link href="../faq" className="w-full">
                                <Button
                                    className="md:w-1/4 w-full flex justify-center
                                    transition ease-in-out delay-150 bg-blue-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">
                                    <MessagesSquare className="w-5 h-5"/>
                                    <p className="text-lg">FAQs</p>
                                </Button>
                            </Link>
                        </div>
                    )}
                    <div className="flex flex-col items-center md:w-1/3">
                        <p className="font-bold text-2xl">Handgame</p>
                        <p className="hidden md:flex text-justify">
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
                    <div className="flex flex-col gap-1 items-center md:items-end w-full md:w-1/3">
                        <div className="grid grid-rows-4 gap-2">
                            <p className="font-bold text-center md:text-start">Social Medias</p>
                            <div className="flex flex-row items-center text-start hover:text-sky-600">
                                <Link href="https://www.instagram.com/handgameterapia" className="w-full flex gap-2 justify-start">
                                    <Instagram className="h-6 w-6"/>
                                    <p>| Instragram</p>
                                </Link>
                            </div>
                            <div className="flex justify-start hover:text-sky-600">
                                <Link href="/" className="w-full flex gap-2 justify-start">
                                    <Facebook className="h-6 w-6 flex"/>
                                    <p>| Facebook</p>
                                </Link>
                            </div>
                            <div className="flex justify-start hover:text-sky-600">
                                <Link href="https://twitter.com/HandGameterapia" className="w-full flex gap-2 justify-start">
                                    <Twitter className="h-6 w-6"/>
                                    <p>| Twitter</p>
                                </Link>
                            </div>
                            <div className="flex flex-row items-center text-center hover:text-sky-600">
                                <Link href="https://github.com/Handgame-Terapia" className="w-full flex gap-2 justify-start">
                                    <Github className="h-6 w-6"/>
                                    <p>| Github</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto pb-6">
                    <p className="text-center text-sm">&copy; 2023 Handgame Terapia. Todos direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;