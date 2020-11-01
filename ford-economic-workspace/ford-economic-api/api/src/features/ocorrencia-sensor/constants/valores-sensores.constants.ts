export const saudavelParametro = `"OcorrenciaSensor"."criado" >= current_timestamp - '1 minute'::interval`;
export const atencaoParametro = [
	`"OcorrenciaSensor"."criado" < current_timestamp - '1 minute'::interval`,
	`"OcorrenciaSensor"."criado" >= current_timestamp - '1 minute 30 second'::interval`,
];
export const cuidadoParametro = [
	`"OcorrenciaSensor"."criado" < current_timestamp - '1 minute 30 second'::interval`,
	`"OcorrenciaSensor"."criado" >= current_timestamp - '2 minute'::interval`,
];
export const perigoParametro = `"OcorrenciaSensor"."criado" < current_timestamp - '2 minute'::interval`;
