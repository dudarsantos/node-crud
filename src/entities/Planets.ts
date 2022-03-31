import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("planetas")
export class Planets {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  surfaceArea: number;

  @Column()
  sunDistance: number;

  @Column()
  day: string;

  @Column()
  gravity: string;

  @Column()
  description: string;

  @Column()
  color: string;

  @Column()
  image: string;

  @Column()
  card_image: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}