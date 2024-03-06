
  TODO:
  =====

		animaciones: frame motion -> viewTrasitions -> scroll()
							lenis

		HEADER : 	link active con isInView? (no en Astro)

		<IMAGES />  porque si saco las imagenes de public y utilizo <Images/> me tarda mas en cargar?

		ROBOTS y SITEMAP


  
  AGREGAR TRABAJOS:
  =================

  1) ir a "/src/trabajos.ts", y agregarlo en el objeto

     trabajos = {
            ...
            "bahia01": {
              nombre: "Bahia Confort",
              categoria: "Apart Hotel",
              portada: "/assets/gallery/bahia1/bahiaconfort01.webp",
              logo: "./assets/logos/bahia_confort.svg",
              galeria: [
                "/assets/gallery/bahia1/bahiaconfort01.webp",
                  ...
                "/assets/gallery/bahia1/bahiaconfort07.webp",
              ],
              tour: "https://www.keepeyeonball.com/Tour/78240ece-c23f-41b8-87c1-86f565a31cb8"
            },
            ...
          }

  2)  y tambien el el arreglo

      categorias = [ "..", "bahia01", "..", ".."]

  3)  agregar el nuevo trabajo tambien en "./interfaces.ts"

      export interface iTrabajos {
        ...
        bahia01: iTrabajo;
        ...
      }
