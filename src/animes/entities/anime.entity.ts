import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Anime {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 60})
    title: string;

    
    
}
