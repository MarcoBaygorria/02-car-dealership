
import { IsString } from "class-validator";


//Recordar que los DTO son para hacer validaciones de la data, es decir que la informacion no cambie su tipo de dato.
//Se aconseja que los DTO sean de solo lectura (readonly) para que estos no sufran modificaciones.
export class CreateCarDto {

    @IsString({ message: `No se encuentra dicha key` }) //! este decorador valida que la data sea de tipo String.
    readonly brand: string;

    @IsString()
    //@MinLength(3) Validacion la cual la propiedad debe tener 3 o mas caracteres.
    readonly model: string;
}