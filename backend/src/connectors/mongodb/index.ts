import mongoose from "mongoose";
 
export async function initDatabase() {
    const localString = "mongodb://root:example@localhost:27017/"

    const options = {
        useNewUrlParser: true,  
        useUnifiedTopology: true,
        maxPoolSize: 10
    }

    await mongoose.connect(localString, options);
    console.log("MongoDB connection succefull");
}