import { useState, useEffect } from "react";
import { trabajos } from "../trabajos";
import { ReactTourSvg } from "./icons/ReactTourSvg";
import "./ReactGaleriaCss.css"
import { ReactCancel } from "./icons/ReactCancel";

export function ReactGaleria({id}) {

  const [mainIndex, setMainIndex] = useState(0)
  const isDesktop = window.innerWidth > 768

  return (
    <section className="w-full h-full pb-32 sm:pb-0 sm:h-[80%] mx-auto sm:flex justify-between mt-20 sm:mt-16">

      <GalHeader id={id}/>
      <GalMainPicture id={id} mainIndex={mainIndex} />
      <GalAsidePictures id={id} mainIndex={mainIndex} setMainIndex={setMainIndex} isDesktop={isDesktop} />
        
    </section>
  )
}


function GalHeader({id}) {
  return (
<header
  className="px-6 sm:px-16 py-3 flex items-center fixed top-0 left-0 w-full h-header-movil sm:h-header-desktop bg-my-body z-40 shadow-my-shadow"
>
  <picture className="h-10 sm:h-8">
    <img
      className="h-full w-full object-cover"
      src="/assets/firmablack.webp"
      alt="firma empresa"
      loading="lazy"
      decoding="async"
    />
  </picture>

  <div className="ml-auto pr-6 flex justify-between items-center gap-2 sm:gap-8 mt-1">
    <h2 className="text-xl font-bold text-right">{trabajos[id].nombre}</h2>
    <picture className="size-8">
      <img
        className="w-full h-full object-cover rounded"
        src={trabajos[id].logo.substring(1)}
        alt={`imagen o logo de `}
        loading="lazy"
        decoding="async"
      />
    </picture>
  </div>

  <a href={`/#${id}`}>
    <ReactCancel className="size-10 sm:size-8 cursor-pointer ml-2" />
  </a>
</header>
  )
}

function GalMainPicture({id, mainIndex}) {

  const hasTour = trabajos[id].tour !== "";

  return (
    <picture className="w-full sm:w-[78%] sm:flex justify-center relative overflow-hidden hidden">
      {hasTour && <div className="absolute -top-2 right-2 z-10 px-4 card">
        <p className="text-xl font-semibold text-center pt-4">Vista</p>
        <div className="spinner">
          <a href={`/tour/${id}`} className="p-0 m-0">
            <ReactTourSvg className="w-20 h-16 p-1 hover:text-my-primary" />
          </a>
        </div>
      </div>}
      <img src={trabajos[id].galeria[mainIndex]} alt={trabajos[id].galeria[mainIndex]} className="h-full relative rounded-xl"/>
    </picture>
  )
}

function GalAsidePictures({id, mainIndex, setMainIndex, isDesktop}) {
  return (
    <aside className="w-full mt-24 sm:mt-0 sm:w-[22%] sm:px-2 h-full flex flex-col gap-4 overflow-hidden overflow-y-auto relative">
        
          {trabajos[id].galeria.map((foto, index) => 
          <div key={index}>

            <img 
              onClick={() => setMainIndex(index)}
              // aspect-[3/4] sm:h-[200px]
              className={`w-full  mx-auto object-cover object-center cursor-pointer rounded-xl ${index === mainIndex && isDesktop && `my-shadow-selected` }`} 
              src={foto} 
              alt={foto}
              />
            {!isDesktop && ( trabajos[id].tour !== "" && (<a href={`/tour/${id}`} class="flex justify-center items-center gap-4 label">
              <span className="text-2xl font-semibold opacity-80">Click aqui para ver tour </span>
              <div className={isDesktop && `hidden`}>
                <div className="spinner">
                    <ReactTourSvg className="w-20 h-16 p-1 " />
                </div>
              </div>
            </a>))}
          </div>
          )}
        </aside>
  )
}