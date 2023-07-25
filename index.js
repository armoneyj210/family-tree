const express = require(`express`);
const app = express();
const User = require(`./models/user`);
app.use(express.urlencoded({ extended: false }));

//Mongoose

const mongoose = reqquire(`mongoose`);
mongoose.connect(`mongodb://localhost/familyTree`);
// replace with 127.0.0.1 if local isnt working

app.get(`/`, function (req, res) {
  res.send(`Hi`);
});

app.listen(3000);
