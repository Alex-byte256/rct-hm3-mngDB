const User = require('../../dataBase/User');

module.exports = {
    getAllUsers: async() => {
        return User.find();
    },

    createNewUser: async (userBody) => {
        return User.create(userBody);
    },

    getSingleUser: async (userId) => {
        return User.find({_id:userId});
    },

    updateUser: async (userId, userBody) => {
        return User.findOneAndUpdate({_id:userId}, userBody, {new: true});
    },

    deleteUserById: async (userId) => {
        console.log(userId)
        return User.deleteOne({_id:userId});
    }
};
