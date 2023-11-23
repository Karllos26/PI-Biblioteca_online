import { IsNotEmpty } from 'class-validator'
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'


@Entity()
export default class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty({ message: 'Name of Category is required' })
  name!: string;
}