import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller()
export class AppController {
	@Get(':imagem')
	getImagem(@Param('imagem') imagem: string, @Res() res: any) {
		return res.sendFile(imagem, { root: './files' }, (err: any) => {
			if (err) {
				res.sendFile('not_found.svg', { root: './files' });
			}
		});
	}
}
