import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm';

const port = Number(process.env.DB_PORT)

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/**/entities/*.js`], 
  migrations: [`${__dirname}/**/migrations/*.js`],
})
