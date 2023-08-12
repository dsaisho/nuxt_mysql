import mysql from 'mysql'
export default defineNitroPlugin((nitro) => {

    var con = mysql.createConnection({
        host: process.env.DATABASE_HOST || '127.0.0.1',
        user: "users_service",
        password: "123",
        database: "users"
    });
    con.connect(function (err) {
        if (err) throw err;
        console.log("DB Connected!");
        nitro.db = con;
    });

    nitro.hooks.hookOnce("close", async () => {

        await new Promise((resolve) => con.end(() => resolve()));
        console.log("db connection closed");
    });
})