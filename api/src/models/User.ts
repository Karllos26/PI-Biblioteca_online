import { IsEmail, IsNotEmpty } from 'class-validator'
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'
import bcrypt from 'bcrypt';

@Entity()
export default class User extends BaseEntity {


  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  @IsNotEmpty({ message: 'Nome is required' })
  name?: string

  @Column()
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email!: string

  @Column({ nullable: true })
  photoUrl?: string



  @Column({ default: 'normal' })
  type!: string

    @Column()
  @IsNotEmpty({ message: 'Senha is required' })
  password!: string
  
  @BeforeInsert()

  async checkPassword(candidatePassword: string): Promise<boolean> {
    console.log('Candidate Password:', candidatePassword);
    console.log('Stored Password:', this.password);
    const result = await bcrypt.compare(candidatePassword, this.password);
    console.log('Password Comparison Result:', result);
    return bcrypt.compare(candidatePassword.trim(), this.password.trim());
  }

  // Adicione um método para verificar se o usuário está autenticado
  async isAuthenticated(candidatePassword: string): Promise<boolean> {
    return this.checkPassword(candidatePassword.trim());
  
  }
}