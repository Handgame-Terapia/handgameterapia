import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

import Gear from "@/public/gear.svg"
import File from "@/public/document.png"
import TechLuva from "@/public/tech_luva.png"

const documentPage = () => {
    return (
        <div className="pt-20 md:pt-0 bg-black text-neutral-300 p-4">
            <div className="hidden md:grid grid-cols-2 px-4 h-screen">
                <div className="flex flex-col items-end justify-center pb-10">
                    <h1 className="text-4xl mb-4 animate-pulse">Trabalhando por um mundo melhor</h1>
                    <p className="w-2/3 text-lg mr-14">
                        Por isso estamos disponibilizando gratuitamente toda a documentação que 
                        criamos não só da luva, mas também do nosso TCC. Para que assim, todos
                        aqueles que queiram fazer aprimoramentos e adaptações, não possuam 
                        obstáculos devido a falta de informação.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        className="animate-spin duration-4000 rotate-360 relative right-52 top-72"
                        src={Gear}
                        height={150}
                        width={150}
                        alt="gear"
                    />
                    <Image
                        className="animate-spin duration-3000 rotate-180 delay-75 relative right-20 top-60"
                        src={Gear}
                        height={200}
                        width={200}
                        alt="gear"
                    />
                </div>
            </div>
            <div className="hidden md:flex justify-evenly text-center p-4 mt-5">
                <div className="flex items-center w-1/2">
                    <div className="w-3/4 text-end">
                        <h1 className="text-4xl">Baixe a documentação da luva</h1>
                        <p className="text-xl">
                            Por meio deste arquivo você terá acesso a toda descrição
                            da luva, desde materiais de fabricação, confecção do PCB,
                            integração entre bluetooth, wifi e serial.
                        </p>
                        <div className="flex justify-end mt-5">
                            <Link href="/" 
                            className="
                            transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
                            flex items-center gap-2 justify-center w-1/3 rounded-lg p-2">
                                <Download className="w-5 h-5"/>
                                <p className="text-lg pt-1 pr-3">Download</p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <Image
                            src={TechLuva}
                            height={200}
                            width={200}
                            alt="tech glove"
                        />
                    </div>
                </div>
                <div className="flex w-1/2 items-center">
                    <div className="w-3/4 text-end">
                        <h1 className="text-4xl">Baixe a documentação do TCC</h1>
                        <p className="text-lg">
                            Por meio deste arquivo você terá acesso a um descritivo da luva,
                            todas nossas analises e conclusões, além claro da metodologia, 
                            custos e lógica por de trás do nosso trabalho
                        </p>
                        <div className="flex justify-end mt-5">
                            <Link href="/" 
                            className="
                            transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
                            flex items-center gap-2 justify-center w-1/3 rounded-lg p-2">
                                <Download className="w-5 h-5"/>
                                <p className="text-lg pt-1 pr-3">Download</p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <Image
                            src={File}
                            height={400}
                            width={400}
                            alt="docs"
                        />
                    </div>
                </div>
            </div>
            <div className="block md:hidden p-4">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl mb-4">Baixe nossas documentações</h1>
                    <p className="text-lg">
                        Assim, você terá um descritivo completo de todo nosso trabalho
                        e conteúdo que disponibilizamos a vocês, para que não se sintam
                        perdidos em termos de uso, resultado e espeficações técnicas
                        tanto da luva, quanto do nosso TCC.
                    </p>
                </div>
                <div className="grid grid-cols-3 mt-4 gap-4">
                    <div className="flex items-center flex-col justify-center">
                        <Image
                            src={TechLuva}
                            height={100}
                            width={100}
                            alt="techluva"
                        />
                        <Link href="/" 
                            className="
                            transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
                            flex items-center gap-2 justify-center rounded-lg p-2">
                            <Download className="w-5 h-5"/>
                            <p className="text-lg pt-1 pr-3">Download</p>
                        </Link>
                    </div>
                    <div className="col-span-2">
                        <h1 className="text-4xl">Baixe a documentação da luva</h1>
                        <p className="text-xl">
                            Por meio deste arquivo você terá acesso a toda descrição
                            da luva, desde materiais de fabricação, confecção do PCB,
                            integração entre bluetooth, wifi e serial.
                        </p>
                    </div>
                    <div className="col-span-2 mt-4">
                        <h1 className="text-4xl">Baixe a documentação do TCC</h1>
                        <p className="text-xl">
                        Assim, você terá um descritivo completo de todo nosso trabalho
                        e conteúdo que disponibilizamos a vocês, para que não se sintam
                        perdidos em termos de uso, resultado e espeficações técnicas
                        tanto da luva, quanto do nosso TCC.
                        </p>
                    </div>
                    <div className="flex items-center flex-col justify-center">
                        <Image
                            src={File}
                            height={100}
                            width={100}
                            alt="docs"
                        />
                        <Link href="/" 
                            className="
                            transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
                            flex items-center gap-2 justify-center rounded-lg p-2">
                            <Download className="w-5 h-5"/>
                            <p className="text-lg pt-1 pr-3">Download</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default documentPage;