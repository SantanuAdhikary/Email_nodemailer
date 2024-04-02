const mongodb = require("mongodb").MongoClient;

let database ; 
let connectDb = async()=>{

    let connection = await mongodb.connect("mongodb://127.0.0.1:27017");
    database = await connection.db("Email_Subscription");
    database.createCollection("user");
    console.log('database created')

}

let insert = (data)=>{
    database.collection("user").insertOne(data);
    console.log('data inserted ')
}


let fetch = ()=>{
   return database.collection("user").find({}).toArray()
}
module.exports = {connectDb,insert,fetch};