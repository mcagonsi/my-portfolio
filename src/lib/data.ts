import { createClient } from "@vercel/postgres";

export default async function connectToDB() {
//   const client = createClient({
//     connectionString: process.env.POSTGRES_URL,
//   });
    const client = createClient();
    await client.connect(); 
    try {
        if(client) {
            console.log("Connected to the database successfully!");
            return client;
        }

    }catch (error) {
        console.error("Error connecting to the database:", error);
    }
}