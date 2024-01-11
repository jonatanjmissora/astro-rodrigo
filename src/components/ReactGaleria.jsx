import { useState, useEffect } from "react";
import { trabajos } from "../trabajos";
import { ReactTourSvg } from "./icons/ReactTourSvg";
import "./ReactGaleriaCss.css"
import { ReactChevronLeft } from "./icons/ReactChevronLeft";

export function ReactGaleria({id}) {

  const [mainIndex, setMainIndex] = useState(0)
  const isDesktop = window.innerWidth > 768

  return (
    <article id="article" className="w-full h-screen sm:h-[90%]">
      <div className="w-full flex items-center gap-[30%] border-b border-gray-500 mb-4 ">
        <a className="flex items-center gap-4 p-0 my-6 sm:m-0" href={`/#${id}`}>
          <ReactChevronLeft className="w-8 h-8"/>
          <span className="font-semibold">Volver</span>
        </a>
        <h2 className="text-xl font-bold">{trabajos[id].nombre}</h2>
      </div>

      <div className="h-[92%] mx-auto sm:flex justify-between">
        
        <picture className="w-full sm:w-[78%] sm:flex justify-center relative overflow-hidden hidden">
          <div className="absolute -top-4 right-4 z-10 card-icon icon-right">
            <div className="spinner">
              <a href={`/tour/${id}`}>
                <ReactTourSvg className="w-20 h-16 p-1 hover:text-my-primary" />
              </a>
            </div>
          </div>
          <img src={trabajos[id].galeria[mainIndex]} alt={trabajos[id].galeria[mainIndex]} className="w-full sm:h-full relative"/>
        </picture>

        <aside className="w-full sm:w-[20%] h-full flex flex-col gap-2 overflow-hidden overflow-y-auto relative">
        <div className={`absolute -top-4 right-4 z-10 card-icon icon-right ${isDesktop && `hidden`}`}>
            <div className="spinner">
              <a href={`/tour/${id}`}>
                <ReactTourSvg className="w-20 h-16 p-1 hover:text-my-primary" />
              </a>
            </div>
          </div>
          {trabajos[id].galeria.map((foto, index) => 
            <img 
              key={index}
              onClick={() => setMainIndex(index)}
              className={`w-[97%] sm:h-[200px] mx-auto object-cover object-center cursor-pointer ${index === mainIndex && isDesktop && `outline outline-4 outline-my-primary` }`} 
              src={foto} 
              alt={foto}
              />
              )}
        </aside>
      </div>
    </article>
  )
}
