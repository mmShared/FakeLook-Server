const { dbConnect } = require('../connection/dbSql')
const sql = require('mssql/msnodesqlv8')

const likesService = () => {
   
    const getLikesPostByPostId = function (id, callback) {
        dbConnect();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        const result = new sql.Request()
            .input("Id", sql.Int, id)
            .execute("GetLikesPostByPostId",
                function (err, data) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        callback(data.recordset);
                    }
                });
    }
    const insertLikePost = async function(Postid,UserId,callback){
        await dbConnect();
        const result = new sql.Request()
        .input("PostId",sql.Int,Postid)
        .input("UserId",sql.Int,UserId); 
        await result.execute("InsertLikePost");
        callback(result.recordset);
    }

    return {
        getLikesPostByPostId,
        insertLikePost
    }
};

module.exports = likesService();