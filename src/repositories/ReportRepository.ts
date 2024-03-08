import { AppDataSource } from "../data-source";
import { Report } from "../entities/Report";

export const ReportRepository = AppDataSource.getRepository(Report)