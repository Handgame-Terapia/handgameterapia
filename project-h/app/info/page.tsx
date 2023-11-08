import VituProf from '@/public/profile/vitu_profile.jpeg'
import GusmaProf from '@/public/profile/gusma_profile.jpeg'
import GustaProf from "@/public/profile/gusta_profile.jpeg"
import BrunoProf from "@/public/profile/bruno_profile.jpg"
import HandgamePic from "@/public/handgame_group.jpeg"
import Card from "./components/card/page";
import Image from 'next/image';

const infoPage = () => {
    return ( 
        <div className='pt-20 md:pt-0 bg-black text-neutral-300 p-4'>
            <div className='grid md:grid-cols-2 px-4'>
                <div className='flex flex-col justify-center gap-4'>
                    <h1 className='text-4xl'>Sobre o Handgame</h1>
                    <p className='text-lg text-neutral-400'>
                        O Handgame é um projeto de desenvolvimento de um dispositivo wearable que possa
                        auxiliar a fisioterapia por meio de jogos digitais, conhecido também
                        como gameterapia.<br/><br/>
                        Iniciado no mês junho de 2022, o projeto teve sua inicio como um 
                        Trabalho de Conclusão de Curso (TCC) da Turma 06G de 2022 da Universidade
                        Presbiteriana Mackenzie (Higienopolis).<br/><br/>
                        Temos como princípio a veradicidade com os dados que exibimos aos fisioterapeutas
                        que foram coletadas por nosso disposítivo e fornecidas pelo nosso dashboard
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                <Image
                    className='rounded-lg'
                    src={HandgamePic}
                    height={600}
                    width={600}
                    alt='Handgame Terapia Group'
                />
                </div>
            </div>
            <div className="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-4 mx-6 my-4">
                <Card 
                    url={GusmaProf}
                    nome="Gustavo Hiroshi Yoshio"
                    tia='32033273'
                    description='
                    Olá, meu nome é Gustavo Hiroshi, gosto de programar, tenho o orgulho de participar
                    dessa equipe como programador fullstack, desenvolvendo tanto a parte do front-end,
                    responsável para deixar o site bonito, até a parte do back-end, o lado do servidor.
                    Gosto de jogar-video game, programar e 
                    cozinhar, adoro café e ir na academia é um dos meus outros hobbies, além disso
                    quero 
                    '
                    twitter='https://twitter.com/gustavo_yh'
                    insta='https://www.instagram.com/gustavo_hiroshi/'
                    insta_nick='@gustavo_hiroshi'
                    twitter_nick='gustavo_yh'
                    
                />
                <Card
                    url={VituProf}
                    nome="Victor de Marqui"
                    tia='32014287'
                    description='Olá meu nome é Victor De Marqui, faço parte desta equipe incrível, fui 
                    responsável pelo desenvolvimento do protótipo físico da luva, confeccionando a 
                    PCB, lidando com a parte eletrônica, integração entre os 3 meios de comunicação 
                    (serial, bluetooth, wi-fi), além da parte de software da luva, um exímio 
                    programador cafeinado.'
                    twitter='https://twitter.com/VictorDeMarqui1'
                    insta='https://www.instagram.com/vitu_dm/'
                    insta_nick='vitu_dm'
                    twitter_nick='VictorDeMarqui1'
                />
                <Card
                    url={GustaProf}
                    nome="Gustavo Eizono Cruz"
                    tia='32012403'
                    description='Fala pessoal, sou o Gustavo Eizono Cruz, fui o responsável pela parte criativa 
                    do projeto e desenvolvimento da fundamentação teórica do projeto, desenvolvendo parte teóricas
                    que relacionavam várias matérias da nossa graduação com o TCC. Gosto de basquete, jogar vídeo games, 
                    Formula 1 e como um bom programador o café.'
                    twitter='https://twitter.com/Cr00zz'
                    insta='https://www.instagram.com/gu.cruz631/'
                    insta_nick='gu.cruz631'
                    twitter_nick='Cr00zz'
                />
                <Card
                    url={BrunoProf}
                    nome="Bruno Frischer"
                    tia='32046235'
                    description='Olá, meu nome é Bruno Frischer, e fui responsável pelo desenvolvimento 
                    e construção teórica deste projeto junto de meus companheiros de equipe. Gosto de 
                    jogar-video game, ler livros e de fazer exercícios fisicos .'
                    twitter='https://twitter.com/brufrischer'
                    insta='https://www.instagram.com/brunofrischer/'
                    insta_nick='brunofrischer'
                    twitter_nick='brufrischer'
                />
            </div>
        </div>
    );
}    
export default infoPage;