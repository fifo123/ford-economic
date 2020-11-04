import { Module } from '@nestjs/common';
import { UsuarioModule } from 'src/features/usuario/usuario.module';
import { PageLoginController } from './page-login.controller';

@Module({
    controllers: [PageLoginController],
    imports: [UsuarioModule],
})
export class PageLoginModule{}
    
