import { ArrayMinSize, ArrayNotEmpty, IsEmail, IsNotEmpty } from 'class-validator'
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'


@Entity()
export default class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  @IsNotEmpty({ message: 'Heading is required' })
  heading!: string;

  @Column()
  @IsNotEmpty({ message: 'Image URL is required' })
  imageUrl!: string;

  @Column({nullable: true})
  description?: string;

  @Column()
  @IsNotEmpty({ message: 'Href is required' })
  href!: string;

  @Column('simple-array')
  @ArrayNotEmpty({ message: 'Category is required' })
  @ArrayMinSize(1, { message: 'At least one category is required' })
  category!: string[];

  @Column({nullable: true})
  rating?: number;
}