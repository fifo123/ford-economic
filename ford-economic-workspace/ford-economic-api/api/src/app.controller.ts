import {
	Controller,
	Get,
	HttpException,
	HttpStatus,
	Query,
	Res,
} from '@nestjs/common';

@Controller()
export class AppController {
	@Get('get-image/')
	getImagem(@Query('imagem') imagem: string, @Res() res: any) {
		if (imagem == 'not_found.svg')
			return res.sendFile('not_found.svg', { root: './assets' });
		if (imagem.indexOf('../assets') != -1) {
			const asset = imagem.replace('../assets/', '');

			return res.sendFile(asset, { root: './assets' }, (err: any) => {
				if (err) {
					res.sendFile('not_found.svg', { root: './assets' });
					throw new HttpException(err, HttpStatus.BAD_REQUEST);
				}
			});
		}

		return res.sendFile(imagem, { root: './files' }, (err: any) => {
			if (err) {
				res.sendFile('not_found.svg', { root: './assets' });
				throw new HttpException(err, HttpStatus.BAD_REQUEST);
			}
		});
	}
}
