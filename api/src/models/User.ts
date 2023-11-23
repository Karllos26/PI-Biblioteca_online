import { IsEmail, IsNotEmpty } from 'class-validator'
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  @IsNotEmpty({ message: 'Nome is required' })
  name!: string

  @Column()
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email!: string

  @Column()
  @IsNotEmpty({ message: 'Foto URL is required' })
  photoUrl!: string

  @Column()
  @IsNotEmpty({ message: 'Senha is required' })
  passowrd!: string

  @Column()
  type!: string
}