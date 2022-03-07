const express = require("express");
const mariadb = require("mariadb");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


const db = mariadb.createPool({
  user: "root",
  host: "localhost",
  password: "Ishdil",
  database: "dy",
});

//SELLER REGISTRATION//
app.post("/sellerReg", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const contactno = req.body.contactno;
  const email = req.body.email;
  const password = req.body.password;
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO sellers (fname,lname,contactno,email,PASSWORD) VALUES(?,?,?,?,?)",
          [fname,lname,contactno,email, hash]);
          
            if (err) {
              res.send(err);
            }

            res.send({ msg: "user registered successfully" });
          }
        );
     })

//CUSTOMER REGISTRATION//


 app.post("/customerReg", (req, res) => {
      const fname = req.body.fname;
      const lname = req.body.lname;
      const contactno = req.body.contactno;
      const email = req.body.email;
      const password = req.body.password;
          bcrypt.hash(password, saltRounds, (err, hash) => {
            db.query(
              "INSERT INTO customers (fname,lname,contactno,email,PASSWORD) VALUES(?,?,?,?,?)",
              [fname,lname,contactno,email, hash]);
              
                if (err) {
                  res.send(err);
                }
    
                res.send({ msg: "user registered successfully" });
              }
            );
         })

//CUSTOMER LOGIN//

app.post("/loginCustomer", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
try{
  const result= await db.query("SELECT * FROM customers WHERE email = ? AND password=?", [email,password]); 
  
  if(result.length>0){
    res.send({msg:"Successfully logged"});
    
    
   }
   else{
    res.send({msg:"wrong combination"});
   
  }
  
}
  catch(err){
    throw err;
  }
});

//SELLER LOGIN//
app.post("/loginSeller", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
try{
  const result= await db.query("SELECT * FROM sellers WHERE email = ? AND password=?", [email,password]); 
  
  if(result.length>0){
    res.send({msg:"Successfully logged"});
    
    
   }
   else{
    res.send({msg:"wrong combination"});
   
  }
  
}
  catch(err){
    throw err;
  }
});


///////////////////////////////////////////////////////////////////////////////
app.get("/trackers", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM sellers");
    res.send(result);
  } catch (err) {
    throw err;
  }
});





app.get("/customers", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM customers");
    res.send(result);
  } catch (err) {
    throw err;
  }
});


app.post("/ssell", async (req, res) => {
 
 
  const email = req.body.email;
  const password = req.body.password;
  try {
    const result = await db.query(
      "INSERT INTO signinseller (email,password) VALUES(?,?)",
      [email,password]
    );
    res.send("data inserted");
  } catch (err) {
    throw err;
  }
});


app.get("/gssell", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM signinseller");
    res.send(result);
  } catch (err) {
    throw err;
  }
});

//////////////////////////////////////////////////////////////////////////////////



app.listen(3001, () => {
  console.log("Server is running");
});