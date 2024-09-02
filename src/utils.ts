import { Client } from "pg";
import "./dotenv";

export async function getClient() {
  const client = new Client(`${process.env.POSTGRES_URL}`);
  await client.connect();
  return client;
}
