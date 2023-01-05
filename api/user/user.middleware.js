const usersService = require("./user.service");
const {BadRequest, Unauthorized, Forbidden, NotFound, Conflict  } = require("../../errors/ApiError");

module.exports = {
    checkIsUserExists: async (req, res, next) => {
        try {
            const user = await usersService.getSingleUser(req.params.userId);

            if(!user){
                throw new NotFound('User not found');
            }

            req.user = user;

            next();
        } catch (e){
            next(e);
        }
    },

    isValidCreatedUser: (req, res, next) => {
        try {
            const {firstName, lastName, password, age} = req.body;

            if (typeof firstName !== 'string' || firstName.length <= 2 || firstName.length >= 20) {
                throw new Forbidden('invalid Name length or type');
            }

            if (typeof lastName !== 'string' || lastName.length <= 2 || lastName.length >=20) {
                throw new Forbidden('invalid Last Name length or type');
            }

            if (typeof password !== 'string'  || password.length < 8 || password.length > 20) {
                throw new Forbidden('invalid Password length or type');
            }

            if ( typeof age !== 'number' || age <= 0 || age > 120) {
                throw new Forbidden('invalid Age');
            }

            next();
        } catch (e) {
            next(e)
        }
    }
}
