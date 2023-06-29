const mongoose = require("mongoose");

const UserData = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please add a name."]
    },
    email: {
        type: String,
        required: [true, "Please add a email."],
        unique: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter valid email"]
    },
    password: {
        type: String,
        required: [true, "Please add a password."],
        minLength: [6, "password must be 6 charecter"],
        maxLength: [10, "password must be lessthan 10 charecters"],
    },
    photo: {
        type: String,
        required: [true, "Please add a photo"],
        default: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
    },
    bio: {
        type: String,
        default: "bio",
        maxLength: [250, "Bio must not have above 250 charecters"]
    },
    phone: {
        type: String,
        default: "+123",
    }
}, {
    timestamps: true,
})

const User = mongoose.model("user", UserData);
module.exports = User;