const EarnController = require('../controllers/earn');
const LinkController = require('../controllers/link');
const UserController = require('../controllers/user');
module.exports = (app) => {
    app.post('/user', [
        UserController.createUser,
    ]);
    app.get('/', [
        EarnController.earnLike,
    ]);
    app.post('/link', [
        LinkController.createLink,
    ]);
    app.get('/link', [
        LinkController.getLink,
    ]);
}