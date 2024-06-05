import mongoose from 'mongoose';
import { MONGO_URI } from '$env/static/private';

export const dbConnect = async () => {
    const connOptions = {
        autoIndex: true,
        family: 4,
    };
    const conn = mongoose.connection;
    conn.on("connecting", async () => console.log("Connecting..."));
    conn.on("connected", async () => console.log("Connected to MongoDB!"));
    conn.on("disconnected", async () => console.log("Disconnected from MongoDB..."));
    conn.on("reconnected", async () => console.log("Reconnected to MongoDB!"));
    conn.on("error", (error) => console.error("MongoDB Error: ", error));
    conn.on("close", async () => console.log("MongoDB Connection Closed..."));
    conn.on("reconnecting", async () => console.log("Reconnecting to MongoDB..."));
    try {
        const db = await mongoose.connect(MONGO_URI, connOptions);
        mongoose.set("debug", true);
        console.log(`\x1b[34m=== Mongoose Debugging Enabled! ===\x1b[0m`);
        return db;
    } catch (error) {
        console.log(`\x1b[31m=== MongoDB Connection Error ===\x1b[0m`);
        console.error(error);
    }
};