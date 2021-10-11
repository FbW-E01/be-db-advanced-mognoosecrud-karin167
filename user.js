import mongoose from "mongoose";


const personSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: 8,
    },
    role: ["User", "Admin", "Editor"]
}, {
    collection: "karinC"
});

export let KarinData = mongoose.model("karinC", personSchema);