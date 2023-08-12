export default defineEventHandler(async (event) => {
    const { db } = useNitroApp()
    const sql = "SELECT * FROM rb_events";

    const directoryData = await new Promise((resolve, reject) => {
        db.query(sql, function (err, result) {
            if (err) throw err;
            resolve(result.map((item) => item.email))
        });
    })

    return {
        data:'testsomsafsfdething',
        directoryData}
})