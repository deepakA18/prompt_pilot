import mongoose from "mongoose";

let isConnected = false;


export const connectDB = async () => {
    mongoose.set('strictQuery',true);
    if(isConnected)
{
    console.log("Connected...");
    return;
}
try {
    await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology: true
    })

    isConnected(true);
    console.log("Connected to DB...");
} catch (error) {
    console.log(error);
}

}


