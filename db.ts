import { MongoClient } from "mongodb";

const MONGO_URI = Bun.env.MONGO_URI;
if (MONGO_URI === undefined) {
    throw new Error('MONGODB_URI enviroment veriable is not set');
}

const mongoClient = new MongoClient(MONGO_URI);

mongoClient.connect().catch((error)=>{
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
});

export default mongoClient;