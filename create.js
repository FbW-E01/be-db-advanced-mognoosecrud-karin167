import mongoose from "mongoose";
import {
    KarinData
} from "./user.js";
import {
    connection,
    disconnect
}
from "./connection.js"

await connection()




const user1 = {
    email: "karin11@gmail.com",
    password: "1234567888",
    role: "Admin"
}
const user2 = {
    email: "karin2@gmail.com",
    password: "1239999997",
    role: "User"
}
const user3 = {
    email: "karin3@gmail.com",
    password: "188888888888",
    role: "Editor"
}

const newUser = await new KarinData(user1);
const newUser2 = await new KarinData(user2);
const newUser3 = await new KarinData(user3);

await newUser2.save()
await newUser3.save()


await disconnect()