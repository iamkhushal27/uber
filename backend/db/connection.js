const mongoose=require("mongoose")

async function dbconnection(params) {
    await mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`)
}

module.exports=dbconnection