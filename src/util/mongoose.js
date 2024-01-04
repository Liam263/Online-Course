module.exports = {
    multipleMongooseToObject: function(mongooseArray){
        return mongooseArray.map(mongooseArray => mongooseArray.toObject())
    },
    MongooseToObject: function(mongooseArray){
        return mongooseArray ? mongooseArray.toObject() : mongooseArray;
    },

}