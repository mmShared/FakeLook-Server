const { dbConnect } = require("../connection/dbSql");
const sql = require("mssql/msnodesqlv8");

const commentsService = () => {
  const getCommentsByPostId = async function(id, callback) {
    await dbConnect();
    const request = new sql.Request()
      .input("Id", sql.Int, id)
      .execute("GetCommentsByPostId", function(err, data) {
        if (err) {
          console.log(err);
        } else {
          callback(data.recordset);
        }
      });
  };
  const insertCommentPost = async (Text, postId)=> {
    await dbConnect();
    var request = new sql.Request();
    request.input("Text", sql.NVarChar, Text);
    request.input("PostId", sql.Int, postId);
    request.input("UserId",sql.Int, 2);
    return await request.execute("InsertCommentPost");
  }

  return {
    getCommentsByPostId,
    insertCommentPost
  };
};

module.exports = commentsService();
