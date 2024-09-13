import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class usuario{

    Id: number;

    @IsNotEmpty({ message: 'O nome é obrigatório' })
    nome: string;
  
    @IsEmail({}, {message: 'Informe um e-mail válido'})
    @IsNotEmpty({message: 'O E-mail é obrigatório'})
    Email: string;

    @IsNotEmpty({message: 'A senha é obrigatória'})
    @MinLength(6, {message: 'A senha deve ter pelo menos 6 caracteres'})
    Senha: string;
}