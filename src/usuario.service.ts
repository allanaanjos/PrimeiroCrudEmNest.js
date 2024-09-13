import { Delete, Injectable, NotFoundException, Param } from '@nestjs/common'
import { usuario } from './model/usuario.entity';


@Injectable()
export class UsuarioService {

    private usuarios: usuario[] =
        [
            {
                Id: 1,
                nome: 'allan',
                Email: 'allan@gmail.com',
                Senha: '1234556'
            },
            {
                Id: 2,
                nome: "bruno",
                Email: "bruno@gmail.com",
                Senha: "1jj355665"
            }
        ];

    criar(usuario: usuario): usuario {
        usuario.Id = this.usuarios.length + 1;
        this.usuarios.push(usuario);
        return usuario;
    }

    getAll(): usuario[] {
        return this.usuarios;
    }

    getById(id: number): usuario {
        const usuario = this.usuarios.find(p => p.Id === id);
        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado');
        }
        return usuario;
    }

    delete(id: Number): usuario[] {
        this.usuarios = this.usuarios.filter(p => p.Id !== id);
        return this.usuarios
    }

    atualizar(id: number, dadosAtualizados: usuario): usuario {
        const usuario = this.getById(id);  

        usuario.nome = dadosAtualizados.nome || usuario.nome;
        usuario.Email = dadosAtualizados.Email || usuario.Email;
        usuario.Senha = dadosAtualizados.Senha || usuario.Senha;

        return usuario;  
    }
}