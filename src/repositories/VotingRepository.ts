import { AppDataSource } from "../data-source";
import { Voting } from "../entities/Voting";

export const VotingRepository = AppDataSource.getRepository(Voting)
