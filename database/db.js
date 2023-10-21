const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://elyssotillo1:<password>@todolist.7afdjf6.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MONGODB ATLAS CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
// minuto 21.20 