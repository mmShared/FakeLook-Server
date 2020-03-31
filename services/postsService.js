const { dbConnect } = require("../connection/dbSql");
const sql = require("mssql/msnodesqlv8");

const postsService = () => {
  
  const getAllPosts = async function(callback) {
    await dbConnect();
    const result = await new sql.Request().execute(
      "GetAllPostsWithUserName",
      function(err, data) {
        if (err) {
          console.log(err);
        } else {
          callback(data.recordset);
        }
      }
    );
  };

  const getPostById = function(id, callback) {
    dbConnect();
    const result = new sql.Request()
      .input("Id", sql.Int, id)
      .execute("GetPostById", function(err, data) {
        if (err) {
          console.log(err);
        } else {
          callback(data.recordset);
        }
      });
  };

  var insertPost = async function(newPostSend) {
    await dbConnect();
    var request = new sql.Request();
    request.input("Photo", sql.NVarChar, newPostSend.photo),
      request.input("Longitude", sql.Float, newPostSend.locationX),
      request.input("Latitude", sql.Float, newPostSend.locationY),
      request.input("Text", sql.Text, newPostSend.text),
      request.input("Date", sql.Date, newPostSend.publishDate),
      request.input("UserId", sql.Int, 3),
      request.input("TagsJson",sql.NVarChar, newPostSend.postTags);
    return (await request.execute("InsertPost"));
  };

  var getAllPostsByDateTime = async (df,dt) =>{
    await dbConnect();
    var request = new sql.Request();
    request.input("fromDate", sql.Date, df),
    request.input("toDate", sql.Date,dt);
    return (await request.execute("GetAllPostsByDateTime")).recordset;
  }

  const getAllPostsByTags = async (tag) => {
    await dbConnect();

    var request = new sql.Request();
    request.input("Tag",sql.NVarChar,tag);
    return (await request.execute("FilterPostsByTags")).recordset;
  }

  return {
    getAllPosts,
    getPostById,
    insertPost,
    getAllPostsByDateTime,
    getAllPostsByTags
  };
};

module.exports = postsService();
