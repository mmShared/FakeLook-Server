const sql = require('mssql/msnodesqlv8')

const dbConfig = {
    server: "(localdb)\\FakelookDb",
    database: "FakelookSqlDb",
    driver: "msnodesqlv8"
}

function dbConnect() {
    sql.connect(dbConfig);
    console.log('Connected to MSSQL')
};

module.exports = {
    sql, dbConnect
}
