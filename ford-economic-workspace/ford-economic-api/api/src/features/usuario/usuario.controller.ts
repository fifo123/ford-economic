import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { AtualizarUsuarioDto } from './dto/atualizar-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService){}

    @Post('/criar')
    async criarUsuario(@Body(ValidationPipe) data: UsuarioDto) {
        return this.usuarioService.criarUsuario(data);
    }

    @Get('')
    async listarUsuarios(){
        return this.usuarioService.listarUsuarios();
    }

    @Get('/:id')
    async listarUsuario(@Param('id') id: number){
        return this.usuarioService.listarUsuario(id);
    }

    @Patch('/atualizar/:id')
    async atualizarUsuario(@Param('id') id:number, @Body(ValidationPipe) data: AtualizarUsuarioDto){
        return this.usuarioService.atualizarUsuario(id, data)
    }

    @Delete('/deletar/:id')
    async deletarUsuario(@Param('id') id:number){
        return this.usuarioService.deletarUsuario(id)
    }
}
