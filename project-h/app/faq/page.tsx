import { MailQuestion } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center text-3xl my-4">FAQ</div>
            <div className="hidden md:grid md:grid-rows-2 grid-rows-3">
                <div className="grid grid-cols-2 mx-4 gap-4">
                    <Card className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-800 duration-300">
                        <CardHeader>
                            <CardTitle>O que é o FAQ?</CardTitle>
                            <CardDescription>Para que serve e como utilizar o FAQ?</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                O FAQ é uma área destina para que as perguntas mais frequentes possam
                                receber mais destaque, assim, aqueles que a possuem, não precisem 
                                perguntar diretamente para nossa equipe, tornando fácil o acesso
                                as perguntas comum.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-800 duration-300">
                        <CardHeader>
                            <CardTitle>Como faço minha pergunta?</CardTitle>
                            <CardDescription>Possue alguma dúvida? Leia essa card e compreenda como podemos solucionar</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Caso sua dúvida não apareça em nosso FAQ, você pode encaminhar elas ao nosso email,
                                iremos tentar responder todas na medida do possível, levando em consideração que
                                trataremos isso em dias úteis.<br/>
                                Dito isto, nosso email para contato é:
                            </p>
                            <Badge className="gap-2 mt-2">
                                <MailQuestion/>
                                <p>handgameterapia@gmail.com</p>
                            </Badge>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex justify-center items-center">
                    <ScrollArea className="h-[250px] w-3/4 rounded-md border p-4 m-4">
                        <p className="text-2xl font-bold border-b-2 text-center pb-4 animate-pulse">PERGUNTAS MAIS FREQUENTES</p>
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
            <div className="md:hidden grid grid-rows-3">
                <div className="flex items-center justify-center">
                    <Card className="m-4 p-2">
                        <CardHeader>
                            <CardTitle>O que é o FAQ?</CardTitle>
                            <CardDescription>Para que serve e o que é o FAQ</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                O FAQ é um acronimo para uma sigla Frequent Asked Questions
                                que podemos traduzir para o português como Perguntas Frequêntes.
                                Este é um ambiente no qual podemos dar destaque as perguntas que
                                são feitas demasiadamente repetitivas. E para facilitar a todos,
                                deixaremos respostas para as 10 perguntas mais frequentes que recebemos.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                <Card className="m-4 p-2">
                        <CardHeader>
                            <CardTitle>Como enviar minha dúvida</CardTitle>
                            <CardDescription>Caso sua dúvida não esteja no FAQ</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Caso a sua dúvida não seja respondida dentro do nosso FAQ
                                você pode enviar um email para o grupo Handgame que iremos 
                                tentar responder da forma mais rápida possível dentro dos dias
                                úteis da semana.
                                Segue nosso email para contato:
                                <Badge className="mt-2">
                                    <MailQuestion/>
                                    <p>handgameterapia@gmail.com</p>
                                </Badge>
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:hidden flex items-start justify-center">
                <ScrollArea className="h-[250px] w-3/4 rounded-md border p-4 m-4">
                        <p className="text-2xl font-bold border-b-2 text-center pb-4 animate-pulse">PERGUNTAS MAIS FREQUENTES</p>
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