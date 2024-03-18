export interface productos {
    IdProducto: number;
    NombreProducto?: string;
    Descripcion?: string;
    Marca?: string;
    Variaciones: Variaciones
}

export interface Variaciones {
    IdVariacion: number;
    IdProducto: number;
    Cantidad: number;
    ValorAnterior: number;
    ValorActual: number;
    Caracteristica: string;
    Imagenes? : Imagenes;
    Oferta: boolean;
}

export interface Imagenes {
    IdImgProducto: number;
    Imagen: string;
}

export interface landingPageDTO {
    productos?: productos[];
}