const userRouter = require('express').Router()

const controller = require('./user.controller');
const mdlwr = require('./user.middleware');

userRouter.get('/', controller.getAllUsers);
userRouter.post('/',mdlwr.isValidCreatedUser, controller.createUser);

userRouter.use('/:userId',mdlwr.checkIsUserExists);
userRouter.get('/:userId', controller.getUserById);
userRouter.put('/:userId',mdlwr.isValidCreatedUser, controller.updateUser);
userRouter.delete('/:userId', controller.deleteUser);

module.exports = userRouter;
