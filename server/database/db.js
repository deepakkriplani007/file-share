import mongoose from "mongoose";

const DBconnection = async () => {
  const MONGO_URI = `mongodb+srv://deepakkriplani007:deepakkriplani007@cluster0.dqh9pvd.mongodb.net/?retryWrites=true&w=majority`;
  //   const MONGO_URI = ``;
  try {
    // UNDERSTAND BELOW LINE
    await mongoose.connect(MONGO_URI, { useNewUrlparser: true });
    console.log("database connected successfully");
  } catch (e) {
    console.error("Error connecting to database", e.message);
  }
};
export default DBconnection;
