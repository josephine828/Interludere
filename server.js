// Please Note: A better database schema is required for this project, thus using PostgreSQL is temporarily on hold. The data is currently saved in local storage.
// I have plans for migrating this over to an actual database in the near future.

const pg = require("pg");
const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8080;

// const env = require("../env.json");
// const Pool = pg.Pool;
// const pool = new Pool(env);
// pool.connect().then(function () {
//     console.log(`Connected to database ${env.database}`);
// });

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());


app.get("/*", (req, res) => {
    console.log(__dirname + "/build");
    res.sendFile(path.join(__dirname, "build", "index.html")); 
});

app.listen(port, () => {
    console.log(`Server is listening on: ${port}`);
});
