const { sqlConfig } = require("../database/db");
const mssql = require('mssql')

exports.getAllVehicles = async(req,res)=>{
    try {
        const pool = await mssql.connect(sqlConfig);
        const data = await pool.request().query('select * from vehiclesData')
        
        return res.status(200).json(data.recordset)
     
        
    } catch (err) {
        // console.log(err.message);
        return res.sendStatus(401);
        
    }
}

const getVehicleById = async(req,res) => {
    try {
        
        let sqlQuery = `select * from vehiclesData where vehicle_id = ${id}`

        let pool = await mssql.connect(sqlConfig)
        let result = await pool.request().query(sqlQuery);
        return  result.recordset;
        
    } catch (error) {
       
        
    }
} 
// module.exports= {getAllVehicles, getVehicleById}