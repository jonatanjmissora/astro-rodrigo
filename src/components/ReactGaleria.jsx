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

      {/*       HEADER       */}
      <div className="w-full flex justify-between items-center sm:justify-start sm:gap-[30%] pr-4 border-b border-gray-500 mb-4 ">
        <a className="flex items-center gap-4 p-0 my-6 sm:m-0" href={`/#${id}`}>
          <ReactChevronLeft className="w-8 h-8"/>
          <span className="text-2xl font-semibold">Volver</span>
        </a>
        <h2 className="text-2xl font-bold">{trabajos[id].nombre}</h2>
      </div>

      <div className="h-[92%] mx-auto sm:flex justify-between">
        
        {/*     IMAGEN PRINCIPAL    */}
        <picture className="w-full sm:w-[78%] sm:flex justify-center relative overflow-hidden hidden">
          <div className="absolute -top-2 -right-2 z-10 px-4 card">
            <div>

            <p class="text-xl font-semibold text-center pt-4">Vista</p>
            <div className="spinner">
              <a href={`/tour/${id}`} class="p-0 m-0">
                <ReactTourSvg className="w-20 h-16 p-1 hover:text-my-primary" />
              </a>
            </div>
            </div>
          </div>
          <img src={trabajos[id].galeria[mainIndex]} alt={trabajos[id].galeria[mainIndex]} className="h-full relative rounded-xl"/>
        </picture>

        {/*       ASIDE FOTOS      */}
        <aside className="w-full sm:w-[22%] sm:px-2 sm:pt-2 h-full flex flex-col gap-4 overflow-hidden overflow-y-auto relative">
        
          {trabajos[id].galeria.map((foto, index) => 
          <div>

            <img 
              key={index}
              onClick={() => setMainIndex(index)}
              className={`w-[100%] sm:h-[200px] mx-auto object-cover object-center cursor-pointer rounded-xl ${index === mainIndex && isDesktop && `my-shadow-selected` }`} 
              src={foto} 
              alt={foto}
              />
              {!isDesktop && <a href={`/tour/${id}`} class="flex justify-center items-center gap-4 label">
                <span class="text-2xl font-semibold">Click aqui para ver en</span>
                <div className={isDesktop && `hidden`}>
                  <div className="spinner">
                      <ReactTourSvg className="w-20 h-16 p-1 " />
                  </div>
                </div>
              </a>}
              </div>
              )}
        </aside>
      </div>
    </article>
  )
}
