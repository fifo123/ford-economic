import { TipsDto } from 'src/features/tips/dto/tips.dto';

export const valoresTips: TipsDto[] = [
	{
		dicaTemplate:
			'Altas rotações consomem maior quantidade de combustível! Vimos que você poderia trocar as marchas ao alcançar menores rotações para que tivesse uma boa economia de combustível!',
	},
	{
		dicaTemplate:
			'Percebemos que você mantem o ar-condicionado ligado durante {porcentagem}% do uso do carro. Procure utilizar por mais tempo os vidros abertos! Além de economizar, nada como um vento fresquinho!',
		dicaValores: '{ porcentagem: 93 }',
	},
	{
		dicaTemplate:
			'Fazer revisões frequentes pode te ajudar a manter todas as peças do seu carro em ordem! As vezes é melhor trocar uma peça ao invés de uma danificar outras, e o custo de manuntenção ser maior!',
	},
	{
		dicaTemplate:
			'A sua velocidade média durante a passagem de lombadas está alta demais! Isso pode causar precocemente o desgaste em alguns componentes do seu Ford! Fique atento!',
	},
];
