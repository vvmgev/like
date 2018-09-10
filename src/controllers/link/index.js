const LinkModel = require('../../models/vkontakte/like');

exports.createLink = (req, res) => {
    LinkModel.createLink(req.body).then((result) => {
            console.log('success')
            console.log(result)
        }).catch((error) => {
            console.log('error');
            console.log(error)
        })
    res.send('qwqwq');
}

exports.getLink = (req, res) => {
    LinkModel.getRandomLink().then(result => {
        res.json({url: result.url})
    }).catch(error => {
        console.log(error);
    })
}