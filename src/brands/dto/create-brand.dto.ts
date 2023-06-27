import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {

    @IsString() //Debe ser string
    @MinLength(1) //Debe al menos tener una letra
    name: string;
}
