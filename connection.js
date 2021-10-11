import mongoose from "mongoose";


export function connection() {

    const userName = "karin-y";
    const pwd = "123456";
    const dbName = "karin-test";

    const conactionString = `mongodb://${userName}:${pwd}@localhost:27017/karin-test`;
    mongoose.connect(conactionString);

    console.log('db is connected');
};

export function disconnect() {
    mongoose.disconnect();
    console.log('db sever is stop');
}