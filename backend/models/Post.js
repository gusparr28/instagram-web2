const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

module.exports = model('Post', postSchema);
