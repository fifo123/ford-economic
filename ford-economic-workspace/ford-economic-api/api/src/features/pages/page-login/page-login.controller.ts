import { Controller, Get, Param } from '@nestjs/common';
import { UsuarioService } from 'src/features/usuario/usuario.service';

@Controller('pages/Login')
export class PageLoginController{
    constructor(private readonly usuarioService: UsuarioService){}

    @Get(':fordId/:senha')
    async getLoginUsuario(@Param('fordId') fordId: string,@Param('senha') senha:string){
        return this.usuarioService.validarUsuario(fordId, senha);
    }

}