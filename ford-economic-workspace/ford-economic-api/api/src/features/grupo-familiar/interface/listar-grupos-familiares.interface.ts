import { GrupoFamiliarEntity } from "../grupo-familiar.entity";

export interface ListarGruposFamiliares {
    total: number;
    gruposFamiliares: GrupoFamiliarEntity[]
}