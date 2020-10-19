import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { GrupoFamiliarDto } from './dto/grupo-familiar.dto';
import { GrupoFamiliarService } from './grupo-familiar.service';

@Controller('grupo-familiar')
export class GrupoFamiliarController {
    constructor(private readonly grupoFamiliarService: GrupoFamiliarService){}

    @Post('/criar')
    async criarGrupoFamiliar(@Body(ValidationPipe) data: GrupoFamiliarDto){
        return this.grupoFamiliarService.criarGrupoFamiliar(data);
    }
}
