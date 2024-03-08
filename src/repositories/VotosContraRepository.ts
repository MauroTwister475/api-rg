import { AppDataSource } from "../data-source";
import { VotosContra } from "../entities/VotosContra";

export const VotosContraRepository = AppDataSource.getRepository(VotosContra)
