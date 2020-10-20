import { GrupoFamiliarEntity } from "../grupoFamiliar.entity";

export interface ListarGruposFamiliares {
    total: number;
    gruposFamiliares: GrupoFamiliarEntity[]
}