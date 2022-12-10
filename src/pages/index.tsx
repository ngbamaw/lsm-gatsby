import * as React from "react";
import { Icon } from "@iconify/react";
import { HeadFC, Link, PageProps } from "gatsby";

import Slideshow from "../components/Slideshow";
import MenuList from "../components/MenuList";
import MenuListItem from "../components/MenuListItem";
import Button from "../components/Button";
import Section from "../components/Section";
import ArticleItem from "../components/ArticleItem";

import CommunicationLogo from "../images/communication.png";
import HumanitaireLogo from "../images/humanitaire.png";
import JanazaLogo from "../images/janaza.png";
import ImamsLogo from "../images/imams.png";
import Logo from "../images/logo.png";
import LogoBg from "../images/logo-bg.png";
import Bg from "../images/bg-test.jpg";
import ImageOne from "../images/image-1.jpg";
import ImageTwo from "../images/image-2.jpg";


const sections = [
  {
    title: "COMMUNICATION",
    src: CommunicationLogo,
    color: "bg-blue-500",
  },
  {
    title: "HUMANITAIRE",
    src: HumanitaireLogo,
    color: "bg-yellow-500",
  },
  {
    title: "JANAZA",
    src: JanazaLogo,
    color: "bg-green-500",
  },
  {
    title: "IMAMS",
    src: ImamsLogo,
    color: "bg-yellow-500",
  },
];

const data = [
  {
    id: 1,
    image: ImageOne,
  },
  {
    id: 2,
    image: ImageTwo,
  },
  {
    id: 3,
    image: Bg,
  },
];



const IndexPage: React.FC<PageProps> = () => {
  const [active, setActive] = React.useState(0);

  return (
    <>
      <header className="flex bg-slate-700 h-12">
        <MenuList>
          <MenuListItem>
            <Icon
              icon="mingcute:headphone-2-line"
              className="text-yellow-400"
            />
            PODCASTS
          </MenuListItem>
          <MenuListItem>
            <Icon
              icon="material-symbols:play-circle-outline"
              className="text-yellow-400"
            />
            VIDEO
          </MenuListItem>
          <MenuListItem className="text-yellow-400">
            LA PLATEFORME LM?
          </MenuListItem>
        </MenuList>
        <img className="h-12 absolute left-1/2 -translate-x-1/2" src={Logo} />
        <MenuList className="ml-auto">
          <MenuListItem>JE SUIS ADHÉRENT</MenuListItem>
          <MenuListItem className="bg-yellow-400 text-slate-700">
            ADHERER
          </MenuListItem>
        </MenuList>
      </header>
      <main className="flex flex-col items-center">
        <div className="relative h-72 w-full bg-red-500">
          <ul className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-wrap gap-8">
            {sections.map((section) => (
              <Section key={section.title} {...section} />
            ))}
          </ul>
          <Slideshow>
            {data.map((item) => (
              <li
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className="w-screen h-full flex-shrink-0 bg-cover bg-center bg-no-repeat"
                key={item.id}
              >
                <p>Test</p>
              </li>
            ))}
          </Slideshow>
        </div>
        <div
          style={{ backgroundImage: `url(${LogoBg})` }}
          className="bg-left max-w-screen-lg bg-no-repeat bg-contain mx-auto px-8 py-8 flex flex-col items-center"
        >
          <p className="relative w-fit mb-8 text-slate-700 text-2xl font-semibold">
            LA PLATEFORME L.E.S MUSULMANS
            <div className="absolute top-0 bottom-0 translate-y-8 scale-105 bg-yellow-400 h-1 w-full" />
          </p>
          <div className="mb-2 text-sm text-center">
            <p>
              La plateforme LM oeuevre depuis 2018 pour accompagner les
              musulmans de france dans leur épanouisssement citoyen et
              religieux.
            </p>
            <p>
              Nos équipes oeuvrent chaque jour pour proposer des services visant
              à accompagner, améliorer et perenniser la vie du culte musulman de
              France.
            </p>
          </div>
          <Link
            to="#"
            className="text-white bg-yellow-400 font-bold py-1 px-6 rounded-full"
          >
            EN SAVOIR PLUS
          </Link>
        </div>
        <div className="max-w-screen-lg px-12">
          <p className="flex uppercase text-slate-700 font-bold h-5 w-fit mb-4 before:w-2 before:h-full before:flex before:mr-2 before:bg-yellow-400">
            Derniers Actualités de la plateforme lm
          </p>
          <ul className="flex flex-wrap gap-4 w-fit">
            <ArticleItem
              title="TAKKFUL"
              description="L'assistance qui facilite l'épreuve"
              src={Bg}
            />
            <ArticleItem
              title="TAKKFUL"
              description="L'assistance qui facilite l'épreuve"
              src={Bg}
            />
            <ArticleItem
              title="TAKKFUL"
              description="L'assistance qui facilite l'épreuve"
              src={Bg}
            />
            <ArticleItem
              title="TAKKFUL"
              description="L'assistance qui facilite l'épreuve"
              src={Bg}
            />
          </ul>
        </div>
        <div className="flex flex-col items-center max-w-screen-lg gap-4 py-8 px-4">
          <p className="text-4xl text-slate-700 w-fit uppercase font-bold">
            Envie d'agir ?
          </p>
          <p className="text-center font-bold">
            Plusieurs moyens sont à ta disposition pour contribuer, toi aussi, à
            la preservation de la pratique et de la vie des musulmans de France.
            Chacun peut contribuer selon ses capacités et ses moyens.
          </p>
          <p className="px-6 py-1 w-fit font-bold text-white bg-yellow-400">
            Pour t'aider à concrétiser ton engagement, voici quelques moyens
            d'action simples ! :
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            <li>
              <Button>
                <Icon
                  icon="material-symbols:play-circle-outline"
                  fontSize={24}
                  className="text-yellow-400"
                />
                Deviens Adherent
              </Button>
            </li>
            <li>
              <Button>
                <Icon
                  icon="material-symbols:play-circle-outline"
                  fontSize={24}
                  className="text-yellow-400"
                />
                Fais un don
              </Button>
            </li>
            <li>
              <Button>
                <Icon
                  icon="material-symbols:play-circle-outline"
                  fontSize={24}
                  className="text-yellow-400"
                />
                Deviens bénévole
              </Button>
            </li>
            <li>
              <Button>
                <Icon
                  icon="material-symbols:play-circle-outline"
                  fontSize={24}
                  className="text-yellow-400"
                />
                Partage sur tes reseaux
              </Button>
            </li>
          </ul>
        </div>
        <div className="max-w-screen-lg px-12 mb-8">
          <p className="flex uppercase text-slate-700 font-bold h-5 before:w-2 before:h-full before:flex before:mr-2 before:bg-yellow-400 mb-4">
            Derniers Actualités de la plateforme lm
          </p>
          <ul className="flex flex-wrap gap-4">
            <ArticleItem
              title="TAKKFUL"
              description="L'assistance qui facilite l'épreuve"
              src={Bg}
            />
            <ArticleItem
              title="TAKKFUL"
              description="L'assistance qui facilite l'épreuve"
              src={Bg}
            />
            <ArticleItem
              title="TAKKFUL"
              description="L'assistance qui facilite l'épreuve"
              src={Bg}
            />
            <ArticleItem
              title="TAKKFUL"
              description="L'assistance qui facilite l'épreuve"
              src={Bg}
            />
          </ul>
        </div>
        <div className="flex items-center w-full max-w-screen-md text-sm px-2 py-12 mb-8 border-yellow-400 border-2 rounded-3xl bg-yellow-400 bg-opacity-10">
          <div className="flex-1 min-w-0">
            <p className="text-yellow-400 uppercase font-bold">
              Rejoignez la communauté lm
            </p>
            <p>
              Recevez nos emails pour rester informé de tous les actualités et
              projets de la plateforme LM
            </p>
          </div>
          <ul className="flex flex-1 min-w-0 h-fit overflow-hidden border-l-2 rounded-l-lg">
            <li className="flex-1 border-r-2 border-y-2">
              <input
                className="px-4 py-2 w-full outline-none"
                type="text"
                placeholder="Nom"
              />
            </li>
            <li className="flex-1 border-r-2 border-y-2">
              <input
                className="px-4 py-2 w-full outline-none"
                type="text"
                placeholder="Prenom"
              />
            </li>
            <li className="flex-1 border-r-2 border-y-2">
              <input
                className="px-4 py-2 w-full outline-none"
                type="text"
                placeholder="Mail"
              />
            </li>
            <li className="flex-1 border-2 border-yellow-400 bg-yellow-400 rounded-r-lg">
              <button className="px-4 py-2 w-full text-white font-bold uppercase">
                Valider
              </button>
            </li>
          </ul>
        </div>
        <div className="bg-slate-700 w-full">
          <div className="flex flex-col items-center max-w-screen-lg py-8 mx-auto">
            <p className="text-yellow-400 uppercase font-bold text-4xl mb-2">
              Je soutiens la plateforme lm
            </p>
            <p className="text-white font-semibold">
              Les équipes de la plateforme LM sont au service des musulmans de
              France.
            </p>
            <p className="text-white font-semibold mb-4">
              Tous nos projets ont pour but de préserver la pratique et la vie
              des musulamns de France.
            </p>

            <ul className="flex flex-1 w-10/12 h-fit overflow-hidden rounded-lg mb-8">
              <li className="flex-1">
                <button className="border-l-2 border-r-2 border-y-2 text-slate-700 bg-white px-4 py-2 w-full font-bold uppercase">
                  10€
                </button>
              </li>
              <li className="flex-1">
                <button className="border-r-2 border-y-2 text-slate-700 bg-white px-4 py-2 w-full font-bold uppercase">
                  20€
                </button>
              </li>
              <li className="flex-1">
                <button className="border-r-2 border-y-2 text-slate-700 bg-white px-4 py-2 w-full font-bold uppercase">
                  50€
                </button>
              </li>
              <li className="flex-1">
                <input
                  className="border-r-2 border-y-2 px-4 py-2 w-full outline-none"
                  type="text"
                  placeholder="Montant libre"
                />
              </li>
            </ul>
            <p className="text-yellow-400 italic">
              En faisant un don à la plateforme LM, vous bénéficiez d'une
              réduction fiscale :{")"}
            </p>
            <p className="text-yellow-400 italic mb-8">
              Un don de 100€ ne vous réellement que 40€
            </p>
            <button className="bg-yellow-400 text-white px-8 py-2 font-bold uppercase rounded-full">
              BISMILLAH
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Les musulmans</title>;
