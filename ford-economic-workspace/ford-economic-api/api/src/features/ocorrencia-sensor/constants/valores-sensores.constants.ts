export const onParametro = `"OcorrenciaSensor"."criado" >= current_timestamp - '1 minute 30 second'::interval`;
export const offParametro = `"OcorrenciaSensor"."criado" < current_timestamp - '1 minute 30 second'::interval`;
