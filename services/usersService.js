const { dbConnect } = require("../connection/dbSql");
const sql = require("mssql/msnodesqlv8");

const usersService = () => {
  const getAllUsers = async function(callback) {
    await dbConnect();
    const result = new sql.Request()
    .execute('GetAllUsers',
      function(err, users) {
        if (err) {
          console.log(err);
        } else {
          callback(users.recordset);
        }
      }
    );
  };

  return {
    getAllUsers
  };
};

module.exports = usersService();
