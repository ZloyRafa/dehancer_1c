import { MongoClient } from "mongodb";

const MONGO_URI = 'mongodb+srv://doadmin:a07K549wlYB3f1j8@front-mongodb-d263f765.mongo.ondigitalocean.com/?tls=true';


const mongoClient = new MongoClient(MONGO_URI);

mongoClient.connect().catch((error)=>{
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
});

export default mongoClient;