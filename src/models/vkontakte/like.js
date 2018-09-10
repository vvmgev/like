const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/like', { useNewUrlParser: true });
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    isActual: {
        type: Boolean,
        default: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
    },
    userId: {
        type: String,
        required: true,
    },
});

likeSchema.virtual('id').get(() => {
    return this._id.toHexString();
});

likeSchema.set('toJSON', {
    virtuals: true
});

likeSchema.findById = cb => {
    return this.model('Like').find({id: this.id}, cb);
};

const Like = mongoose.model('Like', likeSchema);


exports.createLink = (likeData) => {
    const like = new Like(likeData);
    return like.save();
};

exports.getRandomLike = () => {
    return new Promise((resolve, reject) => {
        Like.estimatedDocumentCount((err, count) => {
            if(err) {
                reject(err);
            }
            const random = Math.floor(Math.random() * count);
            Like.findOne().skip(random).exec(
                function (err, result) {
                    if(err) {
                        reject(err);
                    }
                    resolve(result);
                })
        })
    });
};