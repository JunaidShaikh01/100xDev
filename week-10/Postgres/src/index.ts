import { Client } from "pg";

async function createUsersTable() {
  const client = new Client({
    connectionString:
      "postgresql://shaikhjunaid020801%40gmail.com:dlar45xQfUzi@ep-muddy-credit-a5c76gyc.us-east-2.aws.neon.tech/0-100-cohort?sslmode=require",
  });

  await client.connect();

  try {
    // await client.connect(); // Ensure client connection is established
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ('username123', 'user123@example.com', 'user_password123');";
    const res = await client.query(insertQuery);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}

createUsersTable();
