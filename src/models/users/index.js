const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/like', { useNewUrlParser: true });
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName:  String,
    email: String,
    password: String,
    profileLink: String,
});

// userSchema.virtual('id').get(() => {
//     return this._id.toHexString();
// });

userSchema.set('toJSON', {
    virtuals: true
});

userSchema.findById = (cb) => {
    return this.model('Users').find({id: this.id}, cb);
};

const User = mongoose.model('Users', userSchema);

exports.createUser = (userData) => {
    const user = new User(userData);
    return user.save();
};