import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return true
    }

    try {
        await mongoose.connect(process.env.DATABASE_URL as string)
        console.log('Mongodb connected')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;

function sleep(delay: number) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}