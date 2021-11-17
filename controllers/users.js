const { sqlConfig } = require("../database/db");
const mssql = require('mssql')


const getUserById = async(id) => {
    try {
        
        let sqlQuery = `select * from usersData where id = ${id}`

        let pool = await mssql.connect(sqlConfig)
        let result = await pool.request().query(sqlQuery);
        return  result.recordset;
        
    } catch (error) {
       
        
    }
} 

const loginUser = async(email, password) => {
    try {
        
    } catch (error) {
        
    }
}

const registerUser = async(userName, email, password, confirmPassword) =>{
    try {
        if (!email || !username || !password || !confirmPassword) res.status(401).send("fill in all credentials");

        if (password !== confirmPassword) res.status(401).send("Confirm password do not match");
    
        checkPasswordStrength(password);
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { email, name: username, password: hashedPassword };
        let sql = `INSERT INTO users(name, email, password) values("${user.name}", "${user.email}", "${user.password}")`;
        connection.query(sql);
        // res.status(201).send("User was added");
    } catch (error) {
        
    }
}


module.exports = {getUserById, registerUser};