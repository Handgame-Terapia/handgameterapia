import Image from "next/image";
import Link from "next/link";
import { UserSquare } from "lucide-react";

import Analytics from "@/public/analytics.png";
import Glove from "@/public/glove.jpg"
import Bruno from "@/public/bruno frischer.png"
import Gusta from "@/public/gusta.jpg"
import Gusma from "@/public/gusma.png"
import Vitu from "@/public/vitu.png"
import Tgloves from "@/public/t-gloves.png"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const homePage = () => {
    return (
        <div className="bg-black text-neutral-300 px-4">
            <div className="hidden md:flex w-full h-screen justify-center p-10">
                <Image
                    className="w-auto h-4/5 cover rounded-3xl relative"
                    src={Glove}
                    width={1000}
                    height={1000}
                    alt="Luva HandGame"
                />
                <div 
                    className="
                    transition ease-in-out delay-150 bg-bgc-card hover:-translate-y-1 hover:scale-110 hover:bg-bgc-hcard duration-300
                    absolute top-40 left-24 rounded-2xl p-4 w-1/5">
                        <h1 className="text-4xl text-neutral-200 text-center">Vantagens</h1>                                
                        <HoverCard>
                            <HoverCardTrigger>
                                <p className="text-xl text-neutral-300">+ Mobilidade</p>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <h2 className="border-b">Mobilidade</h2>
                                <p>
                                    Por seus componentes serem leves e com uma malha flexível 
                                    a movimentação é garantida, e o cliente não sentirá a sensação 
                                    de estar preso na luva.
                                </p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <p className="text-xl text-neutral-300">+ Arejada</p>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <h2 className="border-b">Arejada</h2>
                                <p>
                                    Nossas preocupações no desing do tecido foi que ela seja
                                    uma malha respirável e flexível, assim, tornando a experiência
                                    do cliente mais agradável.
                                </p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <p className="text-xl text-neutral-300">+ Tecnologia</p>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <h2 className="border-b">Tecnologia</h2>
                                <p>
                                    Além da possibilidade de transformar jogos de lazer em jogos
                                    sérios, não há perca de desempenho na reabilitação. Além
                                    do mais, nós fornecemos um feedback gráfico de sua evolução
                                    conforme o tratamento.
                                </p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <p className="text-xl text-neutral-300">+ Felicidade</p>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <h2 className="border-b">Felicidade</h2>
                                <p>
                                    Além de estar efetivamente praticando um lazer
                                    o paciente estará reabilitando a movimentação fina de seus
                                    membros, oferencedo menos stress ao logo do tratamento diminuíndo assim
                                    as taxas de desistências.
                                </p>
                            </HoverCardContent>
                        </HoverCard>
                </div>
                <div 
                    className="
                    transition ease-in-out delay-150 bg-bgc-card hover:-translate-y-1 hover:scale-110 hover:bg-bgc-hcard duration-300
                    absolute bottom-80 left-24 rounded-2xl p-4 w-1/5 text-lg">
                        <Link href="/info">
                            <h1 className="text-4xl">Quem Somos?</h1>                                
                        </Link>
                        <HoverCard>
                            <HoverCardTrigger>
                                <p className="flex items-center text-md">
                                    <UserSquare className="w-4 h-4"/>
                                    | Bruno Frischer
                                </p>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className="flex gap-2 border-b">
                                    <Image
                                        src={Bruno}
                                        height={20}
                                        width={20}
                                        alt="Bruno Frischer"
                                        />
                                    <h2>Bruno Frischer</h2>
                                </div>
                                <p>
                                    TIA: 32046235<br/>
                                </p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                        <HoverCardTrigger>
                            <p className="flex items-center text-md">
                                <UserSquare className="w-4 h-4"/>
                                | Gustavo Eizono Cruz
                            </p>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <div className="flex gap-2 border-b">
                                <Image
                                    src={Gusta}
                                    height={20}
                                    width={20}
                                    alt="Gustavo Eizono Cruz"
                                    />
                                <h2>Gustavo Eizono Cruz</h2>
                            </div>
                            <p>
                                TIA: 32012403<br/>
                            </p>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger>
                            <p className="flex items-center text-md">
                                <UserSquare className="w-4 h-4"/>
                                | Gustavo Hiroshi Yoshio
                            </p>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <div className="flex gap-2 border-b">
                                <Image
                                    src={Gusma}
                                    height={20}
                                    width={20}
                                    alt="Gustavo Hiroshi Yoshio"
                                    />
                                <h2>Gustavo Hiroshi</h2>
                            </div>
                            <p>
                                TIA: 32033273<br/>
                            </p>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger>
                            <p className="flex items-center text-md">
                                <UserSquare className="w-4 h-4"/>
                                | Victor de Marqui
                            </p>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <div className="flex gap-2 border-b">
                                <Image
                                    src={Vitu}
                                    height={20}
                                    width={20}
                                    alt="Gustavo Hiroshi Yoshio"
                                    />
                                <h2>Victor de Marqui</h2>
                            </div>
                            <p>
                                TIA: 32014287<br/>
                            </p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div className="absolute bottom-48">
                    <Link href="/info">
                        <h2 className="
                        text-8xl text-neutral-300
                        hover:text-sky-700
                        animate-pulse">
                            Handgame
                        </h2>
                    </Link>
                </div>
                <div className="
                transition ease-in-out delay-150 bg-bgc-card hover:-translate-y-1 hover:scale-110 hover:bg-bgc-hcard duration-300
                absolute top-72 right-24 rounded-2xl p-4 w-1/5 text-lg">
                    <div>
                        <h2 className="text-neutral-100 text-4xl">Sobre nós</h2>
                        <p className="text-lg">
                        O projeto handgame nasceu com o intuíto de ajudar os fisioterapeutas
                        a terem métricas mais detalhadas sobre sua evolução, que por consequência
                        irá melhorar a experiência do paciente.
                        </p>
                    </div>
                    <Link href="/info" className="flex justify-center mt-5">
                        <Button className="
                        text-black bg-slate-200
                        hover:-mt-1 hover:bg-sky-500 hover:text-white">
                            Para saber mais
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="md:grid md:grid-cols-3 md:p-4">
                <div className="flex flex-cols justify-between items-center p-4">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold text-center">A Luva</h1>
                        <p className="text-sm md:text-lg">
                            A Luva fisioterapeutica é desenvolvida a partir
                            uma fita que coleta a resistência aplicada durante o 
                            movimento de pinça dos dedos, fornecendo assim, o nível
                            de dobra efetuada pelo usuário.
                        </p>
                    </div>
                    <Image
                        src={Tgloves}
                        height={200}
                        width={200}
                        alt="Imagem Luvas Tecnológicas"
                    />
                </div>
                <div className="flex items-center justify-center p-5">
                    <div className="border-4 rounded-2xl border-gray w-3/4">
                        <h2 className="
                        font-bold text-2xl text-center
                        border-b-2 p-2">
                            Novidades
                        </h2>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="atualização-1">
                                <AccordionTrigger className="flex items-center justify-center">
                                    Site
                                </AccordionTrigger>
                                <AccordionContent className="text-center">
                                    A aba home foi atualizada no dia 31/10/2023
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="atualização-2">
                                <AccordionTrigger className="flex items-center justify-center">
                                    Hardware
                                </AccordionTrigger>
                                <AccordionContent className="text-center">
                                    O hardware ficou pronto no dia 30/10/2023
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="atualização-3">
                                <AccordionTrigger className="flex items-center justify-center">
                                    Documentação
                                </AccordionTrigger>
                                <AccordionContent className="text-center">
                                    A documentação ficou pronta no dia 31/10/2023
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className="flex items-center justify-center p-5 gap-4">
                    <Image
                        className="md:h-auto md:w-auto"
                        src={Analytics}
                        height={200}
                        width={200}
                        alt="Pequena Dashboard"
                    />
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold text-center">Metas</h1>
                        <p className="text-sm md:text-lg">
                                Nossa meta é fornecer dados em formatos gráficos da evolução dos pacientes
                                que utilizam nossa luva, assim, além de conseguir observar sua evolução, o
                                fisioterapeuta também terá dados para conseguir analisar o melhor próximo passo
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}    
export default homePage;