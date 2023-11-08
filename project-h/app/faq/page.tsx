import { MailQuestion } from "lucide-react";

import Light from "@/public/light.svg"
import Conversation from "@/public/conversation.svg"
import thinkining from "@/public/question.svg"
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

const faqPage = () => {
    return (
        <div className="bg-black text-neutral-300 p-4">
            <div className="flex flex-col justify-center items-center p-4 md:h-screen">
                <div className="grid grid-cols-4 w-2/3 mt-4">
                    <div className="col-span-4 md:col-span-3 flex flex-col">
                        <h1 className="text-4xl text-center">O que significa FAQ? </h1>
                        <p className="text-lg p-4">
                            FAQ é um acrónimo para Frequent Asked Questions, ela é uma área designada
                            para que usuários/clientes possam retirar suas dúvidas de forma mais rápida,
                            caso a pergunta não seja muito complexa ou que seja repetida várias vezes.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <Image
                            className="absolute"
                            src={Conversation}
                            height={200}
                            width={200}
                            alt="Light"
                        />
                        <Image
                            className="relative animate-pulse"
                            src={Light}
                            height={200}
                            width={200}
                            alt="Light"
                        />
                    </div>
                    <div className="flex items-center justify-evenly w-full flex-row col-span-4 mt-5 gap-5">
                        <div className="w-1/2">
                            <h1 className="text-4xl">Porque usamos o FAQ?</h1>
                            <p className="text-lg">
                                O FAQ é um sistema para facilitar nossa interações com os usuários que possuerem
                                dúvidas de forma genérica, assim, podemos focar nossos esforços de maneira mais
                                efetiva em problemas pragmáticos.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <h1 className="text-4xl">Como enviar sua pergunta?</h1>
                            <p className="text-lg">
                                Você pode enviar sua pergunta diretamente para nossos emails<br/><br/>
                                <Badge>
                                    handgameterapia@gmail.com
                                </Badge>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center p-4 w-full">
                <div className="flex justify-center items-center w-full">
                    <ScrollArea className="h-[400px] w-full rounded-md border p-4 m-4">
                        <div className="border-b-2 flex flex-row items-center justify-center gap-10">
                            <p className="text-2xl font-bold text-center pb-4 animate-pulse">PERGUNTAS MAIS FREQUENTES</p>
                            <Image
                                src={thinkining}
                                width={150}
                                height={150}
                                alt="thinking"
                            />
                        </div>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="Question 1">
                                <AccordionTrigger>Pergunta 1</AccordionTrigger>
                                <AccordionContent>
                                    Resposta
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 2">
                                <AccordionTrigger>Pergunta 2</AccordionTrigger>
                                <AccordionContent>
                                    Resposta
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 3">
                                <AccordionTrigger>Pergunta 3</AccordionTrigger>
                                <AccordionContent>
                                    Resposta
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 4">
                                <AccordionTrigger>Pergunta 4</AccordionTrigger>
                                <AccordionContent>
                                    Resposta
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 5">
                                <AccordionTrigger>Pergunta 5</AccordionTrigger>
                                <AccordionContent>
                                    Resposta
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 6">
                                <AccordionTrigger>Pergunta 6</AccordionTrigger>
                                <AccordionContent>
                                    Resposta
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 7">
                                <AccordionTrigger>Pergunta 7</AccordionTrigger>
                                <AccordionContent>
                                    Resposta
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 8">
                                <AccordionTrigger>Pergunta 8</AccordionTrigger>
                                <AccordionContent>
                                    Resposta
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 9">
                                <AccordionTrigger>Pergunta 9</AccordionTrigger>
                                <AccordionContent>
                                    Resposta
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 10">
                                <AccordionTrigger>Pergunta 10</AccordionTrigger>
                                <AccordionContent>
                                    Resposta
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}    
export default faqPage;