import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgresql://payment-db_owner:Zdvh5EMfRSu2@ep-crimson-night-a5l9y5i9.us-east-2.aws.neon.tech/payment-db?sslmode=require"
  );
  await client.connect();
  return client;
}
