const { dbConnect } = require("../connection/dbSql");
const sql = require("mssql/msnodesqlv8");

const tagsService = () => {
  const getTagsPostByPostId = async function(id, callback) {
    await dbConnect();
    const result = await new sql.Request()
      .input("Id", sql.Int, id)
      .execute("GetTagsPostByPostId", function(err, data) {
        if (err) {
          console.log(err);
        } else {
        //console.log(data.recordset);
          callback(data.recordset);
        }
      });
  };

  return {
    getTagsPostByPostId
  };
};

module.exports = tagsService();
