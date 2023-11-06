import VituProf from '@/public/profile/vitu_profile.jpeg'
import GusmaProf from '@/public/profile/gusma_profile.jpeg'
import GustaProf from "@/public/profile/gusta_profile.jpeg"
import BrunoProf from "@/public/profile/bruno_profile.jpg"
import HandgamePic from "@/public/handgame_group.jpeg"
import Card from "./components/card/page";
import Image from 'next/image';

const infoPage = () => {
    return ( 
        <div>
            <div>
                <h1 className='text-4xl text-center my-5'>Quem Somos</h1>
                <div className='flex md:flex-row flex-col items-center justify-center'>
                    <div className='md:w-1/2 md:h-1/2 md:absolute md:top-52 md:-right-44 mx-4'>
                        <Image
                            className='rounded-3xl'
                            src={HandgamePic}
                            height={600}
                            width={600}
                            alt='Handgame Terapia Group'
                        />
                    </div>
                    <div className='block h-100 border-white border-2 rounded-2xl w-3/5 text-center py-8 my-5'>
                        <div className='text-start md:w-2/5 md:ml-10 ml-5'>
                            <p className='md:text-2xl text-lg underline'>Sobre o Handgame</p>
                            <p className='md:text-lg text-md'>
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
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-4 mx-6 my-4">
                <Card 
                    url={GusmaProf}
                    nome="Gustavo Hiroshi"
                    tia='32033273'
                    description='
                    Olá, meu nome é Gustavo Hiroshi, gosto de programar, tenho o orgulho de participar
                    dessa equipe como programador fullstack. Gosto de jogar-video game, programar e 
                    cozinhar.
                    '
                    twitter='https://twitter.com/gustavo_yh'
                    insta='https://www.instagram.com/gustavo_hiroshi/'
                />
                <Card
                    url={VituProf}
                    nome="Victor de Marqui"
                    tia='32014287'
                    description='Olá meu nome é Victor De Marqui, faço parte desta equipe foda, fui 
                    responsável pelo desenvolvimento do protótipo físico da luva, confeccionando a 
                    PCB, lidando com a parte eletrônica, integração entre os 3 meios de comunicação 
                    (serial, bluetooth, wi-fi), além da parte de software da luva, um exímio 
                    programador cafeinado.'
                    twitter='https://twitter.com/VictorDeMarqui1'
                    insta='https://www.instagram.com/vitu_dm/'
                />
                <Card
                    url={GustaProf}
                    nome="Gustavo Eizono Cruz"
                    tia='32012403'
                    description='Fala pessoal, sou o Gustavo Eizono, responsável pela parte criativa 
                    do projeto e desenvolvimento da fundamentação teórica do projeto. Gosto de
                    basquete e jogar vídeo games.'
                    twitter='https://twitter.com/Cr00zz'
                    insta='https://www.instagram.com/gu.cruz631/'
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
                />
            </div>
        </div>
    );
}    
export default infoPage;