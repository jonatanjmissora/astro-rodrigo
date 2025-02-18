export type iTrabajos = {
  [key: string]: iTrabajo;
}

export interface iTrabajo {
  nombre: string;
  lugar: string;
  categoria: string;
  portada: string;
  logo: string;
  galeria: string[];
  tour: string;
}