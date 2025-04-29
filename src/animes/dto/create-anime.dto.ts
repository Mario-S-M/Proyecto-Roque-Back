import { IsNotEmpty } from "class-validator";


export class CreateAnimeDto {
    @IsNotEmpty({message: 'El nombre del anime no puede ir vacio' })
    name: string;

}
