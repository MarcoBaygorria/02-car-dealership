// Los entities es la representacion de como quedaria guardada la informacion en la base de datos.

export class Brand {

    id: string; // El id va a ser de tipo string por que se utiliza uuid.
    name: string;

    createAt: number;
    updateAt?: number;
}

//Despues de llenar las entities, pasamos al service.