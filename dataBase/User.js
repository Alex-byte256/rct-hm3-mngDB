const {Schema, model} = require('mongoose');
const validate = require('./validate')
// const rolesEnum = require('../configs/roles.enum');


const UserSchema = new Schema({
        firstName: {type: String, trim: true, default: ''},
        lastName: {type: String, trim: true, default: ''},
        email: {type: String, trim: true, lowercase: true, required: true, unique: true,
            validate: [validate.validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
        age: {type: Number, min:0 , max:120},
        password: {type: String, min: 8, require: true}
        // role: { type: String, enum: Object.values(rolesEnum), default: rolesEnum.USER }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model('User', UserSchema);
