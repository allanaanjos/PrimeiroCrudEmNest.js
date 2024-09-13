import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service'
import { usuario } from './model/usuario.entity';


@Controller('usuarios')
export class UsuarioController {

    constructor(private readonly userService: UsuarioService) { }

    @Post()
    Criar(@Body() user: usuario): usuario {
        return this.userService.criar(user);
    }

    @Get()
    getAll(): usuario[] {
        return this.userService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string): usuario{
        let userId = Number(id)
        return this.userService.getById(userId);
    }

    @Delete(':id')
    Delete(@Param('id') id: string): usuario[]{
        let userId = Number(id)
        return this.userService.delete(userId);
    }

    @Put(':id')
    Put(@Param('id') id: string, @Body() data: usuario): usuario{
        return this.userService.atualizar(Number(id), data);
    }
}