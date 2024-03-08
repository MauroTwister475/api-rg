import { AppDataSource } from "../data-source";
import { VotosEmAbstencao } from "../entities/VotosEmAbstencao";

export const VotosEmAbstencaoRepository = AppDataSource.getRepository(VotosEmAbstencao)
