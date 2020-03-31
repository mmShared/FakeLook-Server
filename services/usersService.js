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
  const insertNewUser = async function (newUser){
    await dbConnect();
    try{
      var request = await new sql.Request();
      request.input("FirstName", sql.NVarChar, newUser.firstName),
      request.input("LastName", sql.NVarChar, newUser.lastName),
      request.input("Age", sql.Int, newUser.age),
      request.input("Address", sql.NVarChar, newUser.address),
      request.input("WorkPlace", sql.NVarChar, newUser.workPlace),
      request.input("UserName", sql.NVarChar, newUser.userName),
      request.input("Password",sql.NVarChar, newUser.password);
      console.log(newUser);
      return (await request.execute("InsertNewUser"));
    } catch (err){
      console.log(err);
    }
  }
      
  return {
    getAllUsers,
    insertNewUser
  };
};

module.exports = usersService();
