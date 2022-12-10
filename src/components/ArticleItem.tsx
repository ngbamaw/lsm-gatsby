import React from "react";
import { Link } from "gatsby";
import Bg from "../images/bg-test.jpg";

const ArticleItem: React.FC<{
  title: string;
  description: string;
  src: string;
}> = ({ title, description, src }) => {
  return (
    <li>
      <Link className="block w-52" to="#">
        <div
          style={{ backgroundImage: `url(${Bg})` }}
          className="relative overflow-hidden flex flex-col bg-cover text-center font-bold h-72 p-4 mb-4 uppercase rounded-xl 
                    before:bg-black before:bg-opacity-60 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10"
        >
          <div className="z-20">
            <p className="text-sky-700 text-2xl">{title}</p>
            <p className="text-zinc-50">{description}</p>
          </div>
          <button className="absolute bottom-4 right-4 z-20 uppercase bg-yellow-400 text-xs text-white py-1 px-4 rounded-full">
            Lire l'article
          </button>
        </div>
        <div className="px-2">
          <p className="mb-2 w-fit font-bold">ASSISTANCE TAKKAFUL</p>
          <p className="w-full uppercase text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ArticleItem;
