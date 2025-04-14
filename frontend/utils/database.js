import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try{
        await mongoose.connect('mongodb://localhost:27017/bookExchangePortal')

        isConnected = true;
        console.log("connected to mongoDB")
    }
    catch(err) {
        console.log(err);
    }
}