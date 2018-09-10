const UserModel = require('../../models/users');

exports.createUser = (req, res) => {
    UserModel.createUser(req.body).then((userData) => {
        console.log('userData');
        console.log(userData);
    }).catch(error => {
        console.log(error)
    })
    res.send('qwqwqw')
}