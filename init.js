const mongoose = require("mongoose");
const Chat = require('./models/chat');

main()
  .then(() => {
    console.log("connection succesfull");
  })
  .catch( (err) => {
    console.log(err);
  })

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

let chats = [
    {
        from: "Geeth",
        to: "Har",
        msg:"Hii",
        created_at:new Date(),
    },
    {
        from: "sri",
        to: "var",
        msg:"wt doing",
        created_at:new Date(),
    },
    {
        from: "chav",
        to: "che",
        msg:"How are you",
        created_at:new Date(),
    },
    {
        from: "SG",
        to: "HV",
        msg:"Hello...",
        created_at:new Date(),
    },
]

Chat.insertMany(chats);