const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// const mModels = require("./Model/mModels");
// const mShop = require("../Model/mShop");
const mlogin = require("./mlogin");
const mregister = require("./mregister");


app.use(cors());
// app.use(bodyParser.json());
app.use(bodyParser.json());

// database port save agurathu
const dbUrl =
  'mongodb://localhost:27017/demoDB';
// connecting mode
mongoose.connect(
  dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err, succ) => {
    if (err) {
      console.log("Db not cconnected");
    } else {
      console.log("DB connected");
    }
  }
);

// server on mode
app.listen(3007, () => {
  console.log("connecting");
});

app.post("/login", function (req, res) {
  console.log(req.body);
  let user = new mlogin();

  user.name = req.body.name;
  
  user.save((err, docs) => {
    if (err) {
      res.status(500).send({ errData: err });
      console.log(err);
    } else {
      res.status(200).send({ docsData: docs });
      console.log(docs);
    }
  });
  console.log('response');
  console.log(res);
});
// 
app.post("/Register", function (req, res) {
  console.log(req.body);
  let user = new mregister();

  user.email = req.body.email;
  
  user.save((err, docs) => {
    if (err) {
      res.status(500).send({ errData: err });
      console.log(err);
    } else {
      res.status(200).send({ docsData: docs });
      console.log(docs);
    }
  });
  console.log('response');
  console.log(res);
});


//  app.get('/login', function (req, res) {
//    mlogin.find({}, {}, {}, function (err, docs) {
//    if (err) {
//        console.log("error")
//        console.log(err)
//        res.status(500).send({ "save": "failed" });
//    } else {
//        console.log("save succ")
//        console.log(docs);
//        res.status(200).send({ "save": docs });
//    }
//  });
//  });


// mlogin collection acess pnura mathri 
// app.get('/getlogin', function (req, res) {
  // console.log("in placement api...")
//   console.log('------------')
//   mlogin.find({}, {}, function (err, docs) {
//     if (err) {
//       console.log(err)
//       res.status(500).send(err)
//     }
//     else {
//       console.log(docs)
//       res.status(200).send(docs)
//     }
//   })
// })