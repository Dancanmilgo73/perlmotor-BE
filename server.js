const express = require('express')
const app = express()
const port = 3001
const {sqlConfig} = require('./database/db')
const sql = require('mssql')
const { getAllVehicles, getVehicleById } = require('./controllers/vehicles')
const cors = require('cors')
const vehicles = require('./routes/vehicles')

app.use(cors())

sql.connect(sqlConfig).then(pool =>{
    if(pool.connected){
    console.log("Connected")}}
);


app.use("/perlmotors/vehicles", vehicles)
// app.get("/vehicles/:id",async(req,res)=>{
//     let {id} = req.params;
//     getVehicleById(id).then((result,err) => {
//         if(err){
//             return err.message
//         }else{
//             res.send(result)
//             return result
//         }
//     })

// })
// app.post("/perlmotors/register", async(req, res)=>{
//     const {email, password, userName, confirmPassword} = req.body;
//   try {
  
//   } catch (error) {
//     res.status(500).send();
//   }


//     function checkPasswordStrength(password) {
//         const checkForLength = new RegExp("^(?=.{8,})");
//         const checkForSymbols = new RegExp("^(?=.*[!@#$%^&*])");
//         const checkForCapsLettersNumbers = new RegExp(
//           "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])"
//         );
//         if (!checkForLength.test(password))
//           res.status(401).send("Password must be atleast 8 characters long ");
    
//         if (!checkForSymbols.test(password))
//           res.status(401).send("Password must contain atleast 1 symbol");
    
//         if (!checkForCapsLettersNumbers.test(password))
//           res
//             .status(401)
//             .send("Password must contain small, letters caps and numbers");
//       }
// })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})