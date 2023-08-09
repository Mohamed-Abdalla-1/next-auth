import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Mohamed:V5JPyi8TBoewy4Jk@cluster0.umkbcep.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
