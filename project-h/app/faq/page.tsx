import Image from "next/image";

import Light from "@/public/light.svg"
import Conversation from "@/public/conversation.svg"
import thinkining from "@/public/question.svg"
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqPage = () => {
    return (
        <div className="pt-20 md:pt-0 bg-black text-neutral-300 md:px-14 px-4">
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
                    <div className="flex items-center md:justify-evenly w-full md:flex-row flex-col col-span-4 mt-5 gap-5">
                        <div className="md:w-1/2 md:block flex flex-col text-center">
                            <h1 className="text-4xl">Porque usamos o FAQ?</h1>
                            <p className="text-lg">
                                O FAQ é um sistema para facilitar nossa interações com os usuários que possuerem
                                dúvidas de forma genérica, assim, podemos focar nossos esforços de maneira mais
                                efetiva em problemas pragmáticos.
                            </p>
                        </div>
                        <div className="md:w-1/2 md:block flex flex-col text-center">
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
                                <AccordionTrigger>Como configurar a luva?</AccordionTrigger>
                                <AccordionContent>
                                    Todas as instruções para configurar a luva estão presentes na documentação da luva na aba Docs do site.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 2">
                                <AccordionTrigger>Qualquer pessoa pode utilizar a luva?</AccordionTrigger>
                                <AccordionContent>
                                Qualquer pessoa pode utilizar a luva e configurar ela em sua máquina própria, porém é recomendado a utilização com o acompanhamento de um profissional da área de saúde e com sugestão do mesmo.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 3">
                                <AccordionTrigger>Como proceder caso seja necessário uma manutenção da luva?</AccordionTrigger>
                                <AccordionContent>
                                A empresa Handgame oferece serviços de manutenção da luva mediante o pagamento de uma taxa. 
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 4">
                                <AccordionTrigger>É necessário baixar algum software para utilização da luva?</AccordionTrigger>
                                <AccordionContent>
                                Não, a luva já vem configurada para você conectar por bluetooth e começar a utilizar, para se ter acesso aos dados coletados por ela, você pode utilizar a dashboard na área do usuário em nosso site.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 5">
                                <AccordionTrigger>Quem somos?</AccordionTrigger>
                                <AccordionContent>
                                Para obter informações sobre a equipe acesse a aba sobre nós no site.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 6">
                                <AccordionTrigger>Onde posso verificar os dados adquiridos pela luva?</AccordionTrigger>
                                <AccordionContent>
                                É possível verificar os dados na dashboard presente após fazer login no site e verificar seu perfil.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 7">
                                <AccordionTrigger>Como posso conectar a luva com meu computador?</AccordionTrigger>
                                <AccordionContent>
                                A luva vem com uma conexão bluetooth integrada então é necessário apenas conectar na rede bluetooth da luva para iniciar o uso.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 8">
                                <AccordionTrigger>A luva realmente funciona com qualquer jogo?</AccordionTrigger>
                                <AccordionContent>
                                Sim, a luva foi construída para funcionar como inputs do teclado então é possível utilizá-la para qualquer jogo de até cinco botões.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 9">
                                <AccordionTrigger>Para fisioterapia existe apenas esta luva ou existem aparelhos para outras partes do corpo?</AccordionTrigger>
                                <AccordionContent>
                                Até o momento existe apenas a luva, porém tendo em vista o funcionamento do hardware, a criação de dispositivos para outras partes do corpo é possível no futuro.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Question 10">
                                <AccordionTrigger>Qual o custo da luva?</AccordionTrigger>
                                <AccordionContent>
                                A luva custa 300 reais
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