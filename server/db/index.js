const config = require('../config').database
const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://${config.HOST}:${config.PORT}`
var ObjectID = require('mongodb').ObjectID;

// const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mogodbDemo';

let query = function (dbName, callback) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, client) {
            if (err) {
                reject(err)
            } else {
                let db = client.db(dbName)
                callback(db).then(res => {
                    resolve(res)
                    client.close()
                })
            }
        });
    })
}


const insert = (table, obj) => {
    return query(dbName, function (db) {
        return new Promise((resolve, reject) => {
            const collection = db.collection(table);
            collection.insert(obj, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    })
}

const remove = (table, id) => {
    return query(dbName, function (db) {
        return new Promise((resolve, reject) => {
            const collection = db.collection(table);
            collection.findAndRemove({
                _id: new ObjectID(id)
            }, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    console.dir(result)
                    resolve(result)
                }
            })

        })

    })
}

const updata = (table, id, obj) => {
    return query(dbName, function (db) {
        return new Promise((resolve, reject) => {
            const collection = db.collection(table);
            collection.updateOne({
                _id: new ObjectID(id)
            }, {
                $set: obj
            }, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    console.dir(result)
                    resolve(result)
                }
            })

        })

    })
}

const findId = (table, id) => {
    return query(dbName, function (db) {
        return new Promise((resolve, reject) => {
            const collection = db.collection(table);
            collection.find({
                _id: new ObjectID(id)
            }).toArray(
                function (err, result) {
                    if (err) {
                        reject(err)
                    } else {
                        console.dir(result)
                        resolve(result)
                    }
                }
            )
        })
    })
}

module.exports = {
    insert,
    remove,
    updata,
    findId
}