import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;


    @IsString({ message: `No se encuentra dicha key` }) //! este decorador valida que la data sea de tipo String.
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    //@MinLength(3) Validacion la cual la propiedad debe tener 3 o mas caracteres.
    readonly model?: string;
}