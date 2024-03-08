import { AppDataSource } from "../data-source";
import { VotosFavor } from "../entities/VotosFavor";

export const VotosFavorRepository = AppDataSource.getRepository(VotosFavor)
