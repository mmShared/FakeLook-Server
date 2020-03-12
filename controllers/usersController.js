const usersService = require('../services/usersService')

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

    return {
        getAllUsers
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

