import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller()
export class AppController {
	@Get('get-image/:imagem')
	getImagem(@Param('imagem') imagem: string, @Res() res: any) {
		if (imagem == 'not_found.svg')
			return res.sendFile('not_found.svg', { root: './assets' });
		return res.sendFile(imagem, { root: './files' }, (err: any) => {
			if (err) {
				res.sendFile('not_found.svg', { root: './assets' });
			}
		});
	}
}
