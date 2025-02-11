const mongoose = require('mongoose');

const userSchema = new mongooose.schema({
    username :{
        type : String,
        required :true,
        trim : true,
        lowercase :true,
        unique : true,
        minlength :[3, 'Username must be at least 3 character long']
    },
    email :{
        type : String,
        required :true,
        trim : true,
        lowercase :true,
        unique : true,
        minlength :[13, 'Username must be at least 13 character long']
    },
    password :{
        type : String,
        required :true,
        trim : true,
        minlength :[3, 'password must be at least 5 character long']
    }
})

const user = mongoose.model('user', userSchema)

module.exports = user;