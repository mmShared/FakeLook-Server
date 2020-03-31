const usersService = require('../services/usersService');
const User = require('../models/user');

const usersController = () => {

    const getAllUsers = async (req, res) => {
        try {
            await usersService.getAllUsers((data) => {
                res.json(data);
            })
        } catch (err) {
            console.log(err);
            res.status(500);
            res.send(err.message);
        }
    }

    const insertNewUser = async (req, res) =>{
        try {
            User.firstName = req.body.FirstName;
            User.lastName = req.body.LastName;
            User.age = req.body.Age;
            User.address = req.body.Address;
            User.workPlace = req.body.WorkPlace;
            User.userName = req.body.UserName;
            User.password = req.body.Password;
            await usersService.insertNewUser(User);
        } catch(err){
            console.log(err);
            res.status(500);
            res.send(err.message);
        }
    }

    return {
        getAllUsers,
        insertNewUser
    };
}

module.exports = usersController;











// const express = require('express')
// const router = express.Router()
// const { dbConnect } = require('../connection/dbSql')
// const { executeQuery } = require('../connection/dbSql')
// const usersService  = require('../services/usersService')
// const sql = require('mssql/msnodesqlv8')

// router.get('/users', (req, res) => {
//     try {
//         usersService.getAllUsers((users) => {
//             res.json(users)
//         });
//     } catch (err) {
//         console.log(err)
//         res.status(500)
//         res.send(err.message)
//     }
// })



// module.exports = router;

