import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

import TeamWork from "@/public/teamworking.png"
import File from "@/public/document.png"
import TechLuva from "@/public/tech_luva.png"

const documentPage = () => {
    return (
        <div className="grid grid-rows-2 mb-4">
            <div className="flex flex-col justify-center items-center m-4 gap-4">
                <h1 className="text-2xl">Documentação</h1>
                <div className="border-white border-2 rounded-2xl p-6 w-3/5">
                    <p>
                        Iremos fornecer toda documentação do TCC e da Luva para que assim
                        caso haja à necessidade de revisitar toda construção do nosso trabalho,
                        ela estará aqui de fácil acesso.<br/><br/>
                        Ademais, também permitirá que outros desenvolvedores de dispositivos
                        wearables possam basear suas próprias técnologias no projeto Handgame.
                    </p>
                </div>
                <div className="flex flex-row-reverse items-center gap-10">
                    <div className="flex flex-col gap-3">
                        <p className="text-3xl font-bold underline">
                            Nosso lema é:
                        </p>
                        <p className="italic">
                            Trabalhando juntos por um mundo melhor
                        </p>
                    </div>
                    <Image
                    src={TeamWork}
                    height={300}
                    width={300}
                    alt="teamWork"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mx-4">
                <div className="flex flex-col items-center justify-between p-4 border-2 rounded-2xl border-white gap-4">
                    <p className="text-lg font-bold">Documentação da Luva</p>
                    <Image
                    className="ml-2"
                    src={TechLuva}
                    height={300}
                    width={300}
                    alt="Luva"
                    />
                    <div className="flex items-center justify-center
                    border-2 rounded-2xl border-white p-2
                    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300">
                        <Link href="#" className="flex items-center gap-2">
                            <Download/>
                            <p>Download</p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between p-4 border-2 rounded-2xl border-white gap-4">
                    <p className="text-lg font-bold">Documentação do TCC</p>
                    <Image
                    className="ml-2"
                    src={File}
                    height={300}
                    width={300}
                    alt="Luva"
                    />
                    <div className="flex items-center justify-center
                    border-2 rounded-2xl border-white p-2
                    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300">
                        <Link href="#" className="flex items-center gap-2">
                            <Download/>
                            <p>Download</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default documentPage;