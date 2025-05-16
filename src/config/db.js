import mongoose from "mongoose"

export function connectDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("Mongodb connect!"))
    .catch(error => console.log(error))
}

